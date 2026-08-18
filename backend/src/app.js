import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { corsOptions } from "./config/corsOptions.js";
import apiRouter from "./routes/index.js";
import { requestLogger } from "./shared/middlewares/requestLogger.js";
import { notFoundHandler } from "./shared/middlewares/notFoundHandler.js";
import { errorHandler } from "./shared/middlewares/errorHandler.js";

const app = express();

app.disable("x-powered-by");

app.use(cors(corsOptions));

app.use(
  express.json({
    limit: "2mb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(cookieParser());

app.use(requestLogger);

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "FullPrep API is healthy",
    data: {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    },
  });
});

app.use("/api/v1", apiRouter);

// Keep /api compatibility for the existing frontend while
// we migrate frontend service calls to /api/v1.
app.use("/api", apiRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
