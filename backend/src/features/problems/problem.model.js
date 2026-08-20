import mongoose from "mongoose";

const testCaseSchema = new mongoose.Schema(
  {
    input: { type: String, required: true },
    output: { type: String, required: true },
    explanation: { type: String, default: "" },
  },
  { _id: false },
);

const problemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true, trim: true },
    description: { type: String, required: true },
    difficulty: { type: String, enum: ["Easy", "Medium", "Hard"], required: true, index: true },
    tags: [{ type: String, trim: true, index: true }],
    companies: [{ type: String, trim: true }],
    acceptanceRate: { type: Number, default: 0, min: 0, max: 100 },
    constraints: [{ type: String }],
    examples: [testCaseSchema],
    visibleTestCases: [testCaseSchema],
    hiddenTestCases: [testCaseSchema],
    editorial: { type: String, default: "" },
    aiPromptConfig: { type: Map, of: String, select: false },
    starterCode: { type: Map, of: String, default: undefined },
    isPublished: { type: Boolean, default: true, index: true },
  },
  { timestamps: true },
);

problemSchema.index({ title: "text", description: "text", tags: "text" });
problemSchema.index({ difficulty: 1, createdAt: -1 });

const Problem = mongoose.model("Problem", problemSchema);
export default Problem;
