'use client';
import Link from "next/link"
import { DollarSign,Search } from "lucide-react"
import { useAuth } from "../context/AuthContext";

const Header = () => {
   const {isAuthenticated} = useAuth();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-900/50 border-b border-zinc-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-emerald-500/10 p-2 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
              <DollarSign className="w-7 h-7 text-emerald-500" />
            </div>
            <h1 className="text-2xl font-bold bg-emerald-500 bg-clip-text text-transparent">
              Finance Tracker
            </h1>
          </Link>


          {/* SEARCH BAR */}
          {isAuthenticated && (
          <div className="relative group">
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-full px-5 py-2.5 flex items-center gap-3 transition-all group-hover:border-emerald-500/50 focus-within:border-emerald-500 focus-within:bg-zinc-800/80">
              <Search className="w-5 h-5 text-zinc-400 group-focus-within:text-emerald-500 transition-colors" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="w-48 text-zinc-200 placeholder:text-zinc-500 bg-transparent focus:outline-none"
              />
            </div>
          </div>
          )}
        </div>
        
      </div>
    </header>
  )
}

export default Header