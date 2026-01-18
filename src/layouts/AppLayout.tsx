import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';

const AppLayout: React.FC = () => {
    return (
        <div className="flex min-h-screen bg-neutral-0">
            {/* Desktop Sidebar (visible only above 1024px for now) */}
            <div className="hidden lg:block">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col">
                <div className="flex-1 p-24 lg:p-40 overflow-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AppLayout;
