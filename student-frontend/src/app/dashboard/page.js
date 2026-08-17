"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in by looking for the JWT token
    const token = localStorage.getItem('token');
    
    if (!token) {
      // If no token is found, kick them back to the home page
      router.push('/');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    // Remove the token and redirect to home
    localStorage.removeItem('token');
    router.push('/');
  };

  // Prevent flashing the dashboard UI before the redirect happens
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Loading your workspace...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Dashboard Navigation Bar */}
      <header className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm mb-8">
        <h1 className="text-2xl font-bold text-blue-600">Full Prep Student Portal</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-50 text-red-600 font-semibold rounded hover:bg-red-100 transition-colors"
        >
          Logout
        </button>
      </header>

      {/* Main Dashboard Content */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Problem List (Takes up 2/3 of the screen on large devices) */}
        <section className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Available Coding Problems</h2>
          <div className="p-4 border border-dashed border-gray-300 rounded text-center text-gray-500">
            No problems loaded yet. We will connect this to your MongoDB database next!
          </div>
        </section>

        {/* Right Column: Stats and AI Tutoring */}
        <section className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Progress</h2>
            <p className="text-gray-600">Keep up the great work! Your stats will appear here.</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-blue-800 mb-2">AI Tutor Ready</h2>
            <p className="text-blue-600 text-sm">
              Gemini is standing by to help you debug and optimize your code when you start solving problems.
            </p>
          </div>
        </section>
        
      </main>
    </div>
  );
}