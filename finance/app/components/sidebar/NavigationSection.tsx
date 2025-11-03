import { BarChart3, CreditCard, LayoutDashboard, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavigationSection = () => {
    const pathname = usePathname()
  return (
    <nav className="space-y-2">
        <Link href="/dashboard" className={`block px-4 py-2 rounded hover:bg-zinc-700/50 hover:text-emerald-400 transition ${pathname === '/dashboard' ? 'bg-zinc-700/50 text-emerald-500' : 'text-zinc-400'}`}>
          <span className="mr-2 flex gap-2 items-center"><LayoutDashboard className="w-4 h-4" />Dashboard</span>
        </Link>
        <Link href="/analytics" className={`block px-4 py-2 rounded hover:bg-zinc-700/50 hover:text-emerald-400 transition ${pathname === '/analytics' ? 'bg-zinc-700/50 text-emerald-500' : 'text-zinc-400'}`}>
          <span className="mr-2 flex gap-2 items-center"><BarChart3 className="w-4 h-4" />Analytics</span>
        </Link>
        <Link href="/dashboard/transactions" className={`block px-4 py-2 rounded hover:bg-zinc-700/50 hover:text-emerald-400 transition ${pathname === '/dashboard/transactions' ? 'bg-zinc-700/50 text-emerald-500' : 'text-zinc-400'}`}>
          <span className="mr-2 flex gap-2 items-center"><CreditCard className="w-4 h-4" />Transactions</span>
        </Link>
        <Link href="/dashboard/settings" className={`block px-4 py-2 rounded hover:bg-zinc-700/50 hover:text-emerald-400 transition ${pathname === '/dashboard/settings' ? 'bg-zinc-700/50 text-emerald-500' : 'text-zinc-400'}`}>
          <span className="mr-2 flex gap-2 items-center"><Settings className="w-4 h-4" />Settings</span>
        </Link>
    </nav>
  )
}

export default NavigationSection