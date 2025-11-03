import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-black flex justify-between'>
        
      <main>{children}</main>
      
    </div>
  );
};

export default DashboardLayout;
