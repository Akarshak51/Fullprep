import mongoose from "mongoose";

const testCaseResultSchema = new mongoose.Schema(
  {
    testCase: { type: Number, required: true },
    passed: { type: Boolean, required: true },
    status: { type: String, required: true },
    stdout: String,
    stderr: String,
    compileOutput: String,
    runtimeMs: Number,
    memoryKb: Number,
  },
  { _id: false },
);

const submissionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true },
    problemId: { type: mongoose.Schema.Types.ObjectId, ref: "Problem", required: true, index: true },
    code: { type: String, required: true },
    language: { type: String, enum: ["cpp", "java", "python", "javascript", "typescript", "C++", "Java", "Python", "JavaScript", "TypeScript"], required: true },
    status: {
      type: String,
      enum: ["Accepted", "Wrong Answer", "Time Limit Exceeded", "Compilation Error", "Runtime Error", "Internal Error", "Pending"],
      default: "Pending",
      index: true,
    },
    testCasesPassed: { type: Number, default: 0 },
    totalTestCases: { type: Number, default: 0 },
    timeTaken: { type: Number, default: null },
    memoryUsed: { type: Number, default: null },
    xpEarned: { type: Number, default: 0 },
    testCaseResults: [testCaseResultSchema],
    judgeStatusId: Number,
  },
  { timestamps: true },
);

submissionSchema.index({ userId: 1, problemId: 1, createdAt: -1 });
submissionSchema.index({ userId: 1, createdAt: -1 });

const Submission = mongoose.model("Submission", submissionSchema);
export default Submission;
