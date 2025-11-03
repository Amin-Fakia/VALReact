'use client'
import UserSection from './sidebar/UserSection'
import NavigationSection from './sidebar/NavigationSection'
import { user, userBalance } from '../mock/data'


const Sidebar = () => {
  
  return (
    <aside className="w-64 bg-zinc-800 p-6 shadow-xl flex flex-col gap-8 h-full">
        <UserSection user={user} balance={userBalance} />
        <NavigationSection  />
    </aside>
  )
}

export default Sidebar