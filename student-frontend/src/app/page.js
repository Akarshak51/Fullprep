import LoginButton from "../components/LoginButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        Welcome to Full Prep
      </h1>
      <p className="text-xl text-gray-700">
        Your AI-Powered Coding Practice Platform
      </p>
      
      {/* Our new Login Button */}
      <LoginButton />
    </main>
  );
}