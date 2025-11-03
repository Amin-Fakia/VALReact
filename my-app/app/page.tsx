import DashboardHeader from "./components/DashboardHeader";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen p-6 bg-zinc-50 font-sans dark:bg-black gap-4 flex-col ">
      <div className="flex justify-between gap-4 w-full">
        <h1 className="font-medium text-2xl">Main Dashboard</h1>
        <select className="py-2 px-4 rounded-full h-fit bg-black focus:outline-none">
          <option value="" className="text-zinc-500">Manage</option>
          <option value="option1" className="text-zinc-500">Option 1</option>
          <option value="option2" className="text-zinc-500">Option 2</option>
          <option value="option3" className="text-zinc-500">Option 3</option>
        </select>
      </div>

      {/* Header for main content area */}
      <div className="">
       
      </div>
      
      
    </div>
  );
}
