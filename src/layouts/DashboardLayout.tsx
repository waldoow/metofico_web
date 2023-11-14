import SideNav from '../components/navigation/SideNav';
import React from 'react';

const DashboardLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <main className="flex gap-6 h-screen">
            <SideNav />
            <div className="m-3 text-xl text-gray-900 font-semibold flex-1 overflow-y-scroll">
                { children }
            </div>
        </main>
    );
};

export default DashboardLayout;
