import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    googleId: { 
      type: String, 
      required: true, 
      unique: true 
    },
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true 
    },
    avatar: { 
      type: String 
    },
    role: { 
      type: String, 
      enum: ['student', 'admin'], 
      default: 'student' 
    },
    xp: { 
      type: Number, 
      default: 0 
    },
    level: { 
      type: Number, 
      default: 1 
    },
    currentStreak: { 
      type: Number, 
      default: 0 
    },
    longestStreak: { 
      type: Number, 
      default: 0 
    },
    bookmarks: [
      { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Problem' 
      }
    ],
    badges: [
      {
        badgeId: { type: String },
        earnedAt: { type: Date, default: Date.now },
      }
    ],
    settings: {
      theme: { type: String, enum: ['light', 'dark'], default: 'light' },
      notificationsEnabled: { type: Boolean, default: true },
    }
  },
  { 
    timestamps: true 
  }
);

const User = mongoose.model('User', userSchema);
export default User;