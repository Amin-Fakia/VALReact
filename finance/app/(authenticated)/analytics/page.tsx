import React from 'react'

const page = () => {
  return (
    <div className=" bg-zinc-900 p-8 h-full ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-zinc-400">Track your financial performance</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-zinc-800 border border-zinc-800 rounded-lg p-6">
            <p className="text-zinc-400 text-sm mb-2">Total Revenue</p>
            <p className="text-3xl font-bold text-white mb-1">$45,231</p>
            <p className="text-emerald-500 text-sm">+20.1% from last month</p>
          </div>
          <div className="bg-zinc-800 border border-zinc-800 rounded-lg p-6">
            <p className="text-zinc-400 text-sm mb-2">Total Expenses</p>
            <p className="text-3xl font-bold text-white mb-1">$12,405</p>
            <p className="text-red-500 text-sm">+8.2% from last month</p>
          </div>
          <div className="bg-zinc-800 border border-zinc-800 rounded-lg p-6">
            <p className="text-zinc-400 text-sm mb-2">Net Profit</p>
            <p className="text-3xl font-bold text-white mb-1">$32,826</p>
            <p className="text-emerald-500 text-sm">+15.3% from last month</p>
          </div>
          <div className="bg-zinc-800 border border-zinc-800 rounded-lg p-6">
            <p className="text-zinc-400 text-sm mb-2">Transactions</p>
            <p className="text-3xl font-bold text-white mb-1">1,234</p>
            <p className="text-emerald-500 text-sm">+12.5% from last month</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-zinc-800 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Monthly Overview</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 45, 78, 52, 90, 67, 85, 72, 95, 68, 88, 92].map((height, i) => (
                <div key={i} className="flex-1 bg-emerald-500 rounded-t" style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-zinc-400">
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>

          <div className="bg-zinc-800 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Category Breakdown</h3>
            <div className="space-y-4">
              {[
                { name: 'Food & Dining', amount: '$4,823', percent: 65 },
                { name: 'Transportation', amount: '$2,156', percent: 45 },
                { name: 'Shopping', amount: '$3,672', percent: 78 },
                { name: 'Entertainment', amount: '$1,954', percent: 35 }
              ].map((cat, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-zinc-300">{cat.name}</span>
                    <span className="text-white font-semibold">{cat.amount}</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${cat.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-zinc-800 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { desc: 'Grocery Store', date: 'Today', amount: '-$87.50', type: 'expense' },
              { desc: 'Salary Deposit', date: 'Yesterday', amount: '+$5,200', type: 'income' },
              { desc: 'Gas Station', date: '2 days ago', amount: '-$45.00', type: 'expense' },
              { desc: 'Freelance Project', date: '3 days ago', amount: '+$1,500', type: 'income' }
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-zinc-800 last:border-0">
                <div>
                  <p className="text-white font-medium">{activity.desc}</p>
                  <p className="text-zinc-400 text-sm">{activity.date}</p>
                </div>
                <span className={`font-semibold ${activity.type === 'income' ? 'text-emerald-500' : 'text-white'}`}>
                  {activity.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page