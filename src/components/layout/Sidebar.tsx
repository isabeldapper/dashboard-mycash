import React, { useState } from 'react';
import {
    LayoutDashboard,
    CreditCard,
    ArrowLeftRight,
    User,
    Target,
    ChevronLeft,
    ChevronRight,
    LogOut
} from 'lucide-react';
import { motion } from 'framer-motion';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
        { icon: CreditCard, label: 'Meus Cartões', to: '/cartoes' },
        { icon: ArrowLeftRight, label: 'Transações', to: '/transacoes' },
        { icon: Target, label: 'Minhas Metas', to: '/metas' },
        { icon: User, label: 'Meu Perfil', to: '/perfil' },
    ];

    return (
        <motion.aside
            initial={false}
            animate={{ width: isCollapsed ? 80 : 280 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="h-screen bg-neutral-0 border-r border-neutral-100 flex flex-col p-16 sticky top-0"
        >
            {/* Logo Section */}
            <div className="flex items-center gap-12 mb-40 h-[40px]">
                <div className="w-40 h-40 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-neutral-1000 font-bold text-xl">$</span>
                </div>
                {!isCollapsed && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-h-sm font-bold text-neutral-1000 whitespace-nowrap"
                    >
                        mycash<span className="text-brand-600">+</span>
                    </motion.span>
                )}
            </div>

            {/* Navigation Section */}
            <nav className="flex-1 flex flex-col gap-8">
                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.to}
                        icon={item.icon}
                        label={item.label}
                        to={item.to}
                        isCollapsed={isCollapsed}
                    />
                ))}
            </nav>

            {/* Bottom Actions and Profile */}
            <div className="mt-auto flex flex-col gap-16 pt-24 border-t border-neutral-100">
                <button
                    className="flex items-center gap-12 p-12 text-neutral-500 hover:text-negative-DEFAULT hover:bg-negative-light rounded-xl transition-all duration-300 w-full"
                >
                    <LogOut size={24} />
                    {!isCollapsed && <span className="font-medium">Sair</span>}
                </button>

                <div className="flex items-center gap-12 p-8 bg-neutral-50 rounded-2xl">
                    <div className="w-40 h-40 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Isabel"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {!isCollapsed && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col min-w-0"
                        >
                            <span className="text-label-md font-bold text-neutral-1000 truncate">Isabel Dapper</span>
                            <span className="text-label-xs text-neutral-500 truncate">Administradora</span>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-12 top-48 w-24 h-24 bg-neutral-1100 text-brand-600 rounded-full flex items-center justify-center border-4 border-neutral-0 shadow-premium hover:scale-110 transition-transform cursor-pointer z-10"
            >
                {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
            </button>
        </motion.aside>
    );
};

export default Sidebar;
