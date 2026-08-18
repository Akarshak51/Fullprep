import app from "./app.js";
import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { connectRedis, disconnectRedis } from "./config/redis.js";

async function startServer() {
  try {
    await connectDB();

    await connectRedis();

    const server = app.listen(env.port, () => {
      console.log(`Server running on port ${env.port}`);
      console.log(`Environment: ${env.nodeEnv}`);
    });

    const shutdown = async (signal) => {
      console.log(`${signal} received. Shutting down...`);

      server.close(async () => {
        try {
          await disconnectRedis();
          await import("mongoose").then(({ default: mongoose }) =>
            mongoose.disconnect(),
          );

          console.log("Server shutdown complete");
          process.exit(0);
        } catch (error) {
          console.error("Shutdown error:", error);
          process.exit(1);
        }
      });
    };

    process.on("SIGINT", () => shutdown("SIGINT"));
    process.on("SIGTERM", () => shutdown("SIGTERM"));
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
