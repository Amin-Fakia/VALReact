import Link from "next/link"

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center p-4 font-sans font-medium bg-black text-white">
        <div className="flex gap-6">
            <Link className="text-lg" href="/dashboard/overview">Overview</Link>
            <Link className="text-lg" href="/dashboard/account">Account</Link>
            <Link className="text-lg" href="/dashboard/settings">Settings</Link>


        </div>
    </div>
  )
}

export default DashboardHeader