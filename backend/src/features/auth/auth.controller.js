import User from '../users/user.model.js';
import { verifyGoogleToken } from './googleOAuth.service.js';
import jwt from 'jsonwebtoken';

export const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;
    
    // 1. Verify Google token
    const payload = await verifyGoogleToken(credential);
    const { sub: googleId, email, name, picture: avatar } = payload;

    // 2. Find or create user in MongoDB
    let user = await User.findOne({ googleId });
    if (!user) {
      user = await User.create({ googleId, email, name, avatar });
    }

    // 3. Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.SESSION_SECRET,
      { expiresIn: '7d' }
    );

    res.status(200).json({ success: true, token, user });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(401).json({ success: false, message: 'Invalid Google Token' });
  }
};

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-__v');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};