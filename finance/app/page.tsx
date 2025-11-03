'use client'
import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 font-sans">
      <div className="flex flex-col items-center space-y-8 text-center px-4">
      <h1 className="text-6xl font-bold text-white mb-4">
      Finance Dashboard
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl">
      Take control of your financial future with powerful analytics and insights
      </p>
      <button className="mt-8 px-8 py-4 cursor-pointer bg-emerald-600  text-white font-semibold rounded-lg shadow-lg " onClick={() => {
        if (user) {
          router.push('/dashboard');
        } else {
          router.push('/login');
        }
      }}>
      Get Started
      </button>
      </div>
    </div>
  );
}
