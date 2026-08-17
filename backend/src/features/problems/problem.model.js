import mongoose from 'mongoose';

const testCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  output: { type: String, required: true },
  explanation: { type: String }
});

const problemSchema = new mongoose.Schema(
  {
    title: { 
      type: String, 
      required: true 
    },
    slug: { 
      type: String, 
      required: true, 
      unique: true 
    },
    description: { 
      type: String, 
      required: true 
    },
    difficulty: { 
      type: String, 
      enum: ['Easy', 'Medium', 'Hard'], 
      required: true 
    },
    tags: [{ type: String }],
    companies: [{ type: String }],
    acceptanceRate: { 
      type: Number, 
      default: 0 
    },
    constraints: [{ type: String }],
    examples: [testCaseSchema],
    visibleTestCases: [testCaseSchema],
    hiddenTestCases: [testCaseSchema],
    editorial: { type: String },
    aiPromptConfig: { 
      type: Map, 
      of: String 
    }
  },
  { 
    timestamps: true 
  }
);

const Problem = mongoose.model('Problem', problemSchema);
export default Problem;