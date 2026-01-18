import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import HeaderMobile from '../components/layout/HeaderMobile';

const AppLayout: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-[#FAFAFA]"> {/* bg-neutral-0 assumed as white/near-white, using manual hex or token if defined */}

            {/* Desktop Sidebar (visible >= 1024px) */}
            <div className="hidden lg:block h-screen sticky top-0 z-40">
                <Sidebar />
            </div>

            {/* Mobile Header (visible < 1024px) */}
            <HeaderMobile />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0">
                {/* Ajuste de padding: menor no mobile (p-4), maior no desktop (p-10) */}
                <div className="flex-1 p-4 lg:p-10 overflow-auto">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AppLayout;
