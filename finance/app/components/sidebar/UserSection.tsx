import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowUp } from "lucide-react";

interface UserSectionProps {
    user: {
        name: string;
        email: string;
        avatarUrl: string;
        premium?: boolean;
    };
    balance?: number;

}
const calcMonthlyGrowth = (balance: number) => {
  // Placeholder logic for monthly growth calculation
  return balance * 0.125; // Assume a fixed 12.5% growth for demonstration
}

const getUsernameAbbreviation = (name: string) => {
  return name
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}
const cutUsernametoLength = (name: string, length: number) => {
  if (name.length <= length) return name;
  return name.slice(0, length) + ".";
}

const getPremiumColor = (premium?: boolean) => {
  return `${premium ? 'bg-emerald-500 text-white' : 'bg-zinc-700 text-zinc-400'} px-2 py-1 rounded-full text-xs`;
}
const UserSection = ({ user, balance }: UserSectionProps) => {
  return (
    <div>
     <div className="flex items-center gap-3 mb-6">
        <Avatar className="w-12 h-12 ring-2 ring-green-500 ring-offset-2 ring-offset-zinc-800">
        <AvatarFallback className='bg-emerald-500 text-white font-semibold'>{getUsernameAbbreviation(user.name)}</AvatarFallback>
        </Avatar>
        <div>
        <h3 className="text-white font-semibold">{cutUsernametoLength(user.name, 6)}</h3>
        <p className={getPremiumColor(user.premium)}>{user.premium ? 'Premium Account' : 'Free Account'}</p>
        </div>
      </div>
      <div className="bg-emerald-500/10 rounded-xl p-5 backdrop-blur border border-emerald-500/20 shadow-lg">
        <div className="flex items-center justify-between mb-2">
        <p className="text-xs text-zinc-400 uppercase tracking-wide">Total Balance</p>
        <span className="text-xs px-2 py-1 flex gap-1 items-center rounded-full bg-emerald-500/20 text-emerald-400">
        <ArrowUp className="w-3 h-3 inline-block mr-1" />
         {balance ? `${calcMonthlyGrowth(balance).toFixed(2)}€` : '€0.00'}</span>
        </div>
        <p className="text-3xl font-bold text-white mb-1">{balance ? `€${balance.toFixed(2)}` : '€0.00'}</p>
        <p className="text-xs text-emerald-400 flex items-center gap-1">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        Growth this month
        </p>
      </div>
      </div>
  )
}

export default UserSection