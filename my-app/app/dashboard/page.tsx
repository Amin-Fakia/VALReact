import React from 'react'

const page = () => {
  return (
    <div className='flex h-screen w-full p-4 flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Finance Overview</h1>
        <div className=''>
            <p className='text-lg'>Here you can find an overview of your financial status.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
                {/* Income */}
                <div className='bg-gray-800 rounded-lg p-4'>
                    <p className='text-gray-400 text-sm'>Income</p>
                    <p className='text-2xl font-bold mt-2'>$9k</p>
                </div>
                
                {/* Expenses */}
                <div className='bg-gray-800 rounded-lg p-4'>
                    <p className='text-gray-400 text-sm'>Expenses</p>
                    <p className='text-2xl font-bold mt-2'>$4k</p>
                </div>
                
                {/* Points */}
                <div className='bg-gray-800 rounded-lg p-4'>
                    <p className='text-gray-400 text-sm'>Points</p>
                    <p className='text-2xl font-bold mt-2'>98</p>
                </div>
            </div>

            {/* Balance Card */}
            <div className='bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 mt-4'>
                <p className='text-white text-sm'>Balance</p>
                <p className='text-white text-3xl font-bold mt-2'>$6,421.50</p>
                <div className='flex items-center gap-2 mt-4'>
                    <span className='text-white'>••••</span>
                    <span className='text-white'>••••</span>
                    <span className='text-white'>••••</span>
                    <span className='text-white'>3667</span>
                </div>
            </div>

            {/* Earnings Card */}
            <div className='bg-gray-800 rounded-lg p-6 mt-4'>
                <div className='flex justify-between items-start mb-4'>
                    <div>
                        <p className='text-gray-400 text-sm'>Earnings</p>
                        <p className='text-white text-2xl font-bold mt-1'>$894.39</p>
                    </div>
                    <div className='bg-white rounded-full p-2'>
                        <span className='text-red-500'>₽</span>
                    </div>
                </div>
                <div className='h-20 flex items-end gap-1'>
                    {/* Simple chart representation */}
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                        <div key={day} className='flex-1 flex flex-col items-center'>
                            <div 
                                className='w-full bg-red-500 rounded-t' 
                                style={{height: `${Math.random() * 60 + 20}%`}}
                            />
                            <p className='text-gray-500 text-xs mt-2'>{day.slice(0, 3)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default page