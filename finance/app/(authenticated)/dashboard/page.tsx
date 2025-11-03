import { stats, transactions } from '@/app/mock/data'

const page = () => {
  return (
    <div className='min-h-screen bg-zinc-900 p-8'>
      <div className='max-w-7xl mx-auto space-y-6'>
      {/* Header */}
      <div className='flex items-center justify-between'>
      <h1 className='text-4xl font-bold text-zinc-100'>Dashboard</h1>
      <div className='flex gap-3'>
      <button className='px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors cursor-pointer'>
        New Transaction
      </button>
      </div>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {stats.map((stat, i) => (
      <div key={i} className='bg-zinc-800/50 backdrop-blur border border-zinc-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors'>
        <p className='text-zinc-400 text-sm mb-2'>{stat.label}</p>
        <p className='text-3xl font-bold text-zinc-100 mb-1'>{stat.value}</p>
        <p className={`text-sm ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
        {stat.change}
        </p>
      </div>
      ))}
      </div>

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      {/* Recent Transactions */}
      <div className='lg:col-span-2 bg-zinc-800/50 backdrop-blur border border-zinc-700 rounded-xl p-6'>
      <h2 className='text-xl font-semibold text-zinc-100 mb-4 flex items-center gap-2'>
        Recent Transactions
        <span className='h-2 w-2 bg-emerald-500 rounded-full animate-pulse'></span>
      </h2>
      <div className='space-y-3'>
      {transactions.map((tx, i) => (
        <div key={i} className='flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg hover:bg-zinc-900/80 transition-colors'>
        <div>
        <p className='text-zinc-100 font-medium'>{tx.name}</p>
        <p className='text-zinc-400 text-sm'>{tx.category} • {tx.time}</p>
        </div>
        <p className={`font-semibold ${tx.amount.startsWith('+') ? 'text-emerald-400' : 'text-zinc-100'}`}>
        {tx.amount}
        </p>
        </div>
        ))}
      </div>
      </div>

      {/* Quick Actions */}
      <div className='bg-zinc-800/50 backdrop-blur border border-zinc-700 rounded-xl p-6'>
      <h2 className='text-xl font-semibold text-zinc-100 mb-4'>Quick Actions</h2>
      <div className='space-y-3'>
        {['Send Money', 'Pay Bills', 'Add Income', 'View Reports'].map((action, i) => (
        <button key={i} className='w-full p-4 bg-zinc-900/50 hover:bg-emerald-500/10 hover:border-emerald-500 border border-zinc-700 rounded-lg text-zinc-100 transition-all text-left'>
        {action}
        </button>
        ))}
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default page