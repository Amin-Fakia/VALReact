'use client';
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"
import { usePathname } from "next/navigation"


const Header = () => {
  const pathname = usePathname()
  return (
    <div className="flex justify-between items-center p-4 font-sans font-medium bg-black text-white">
      <div>
        <Image src={"/logo_only.png"} width={40} height={40} alt="logo" />
      </div>
      <div className="flex gap-10">
        <Link href={"/"} className={`  ${pathname === "/" ? "text-cyan-500" : "text-zinc-500"}`}>Home</Link>
        <Link href={"/about"} className={`  ${pathname === "/about" ? "text-cyan-500" : "text-zinc-500"}`}>About</Link>
        <Link href={"/contact"} className={`  ${pathname === "/contact" ? "text-cyan-500" : "text-zinc-500"}`}>Contact</Link>
      </div>
      <div className="flex">
        <div className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-full justify-center">
          <input 
            type="text" 
            placeholder="Search Movies" 
            className="bg-transparent text-white placeholder-gray-400 outline-none pl-1"
          />
          <Search className="w-4 h-4 text-gray-400" />
        </div>
        
      
      </div>
    </div>
  )
}

export default Header