"use client"; 

import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';
import api from '../lib/api';

export default function LoginButton() {
  const router = useRouter(); // Initialize the Next.js router

  const handleSuccess = async (credentialResponse) => {
    try {
      // Send the Google credential token to your backend
      const res = await api.post('/auth/google', {
        credential: credentialResponse.credential,
      });
      
      const { token, user } = res.data;
      
      // Save the JWT token to local storage so the user stays logged in
      localStorage.setItem('token', token);
      
      console.log("Login Success! User Data:", user);
      
      // Instantly redirect the user to their new dashboard
      router.push('/dashboard');
      
    } catch (error) {
      console.error("Login Error:", error);
      alert("Failed to log in. Please check the console for details.");
    }
  };

  const handleError = () => {
    console.log('Google Login was unsuccessful');
  };

  return (
    <div className="mt-8">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        theme="filled_blue"
        shape="pill"
      />
    </div>
  );
}