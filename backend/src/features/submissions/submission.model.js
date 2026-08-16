import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    problemId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Problem', 
      required: true 
    },
    code: { 
      type: String, 
      required: true 
    },
    language: { 
      type: String, 
      enum: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'], 
      required: true 
    },
    status: { 
      type: String, 
      enum: ['Accepted', 'Wrong Answer', 'Time Limit Exceeded', 'Compilation Error', 'Runtime Error', 'Pending'],
      default: 'Pending'
    },
    testCasesPassed: { 
      type: Number, 
      default: 0 
    },
    totalTestCases: { 
      type: Number, 
      default: 0 
    },
    timeTaken: { 
      type: Number 
    }, // in milliseconds
    memoryUsed: { 
      type: Number 
    }, // in kilobytes
  },
  { 
    timestamps: true 
  }
);

const Submission = mongoose.model('Submission', submissionSchema);
export default Submission;