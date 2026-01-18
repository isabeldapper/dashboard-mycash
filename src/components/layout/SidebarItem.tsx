import React from 'react';
import { NavLink } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    to: string;
    isCollapsed: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, to, isCollapsed }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-12 p-12 rounded-xl transition-all duration-300 group relative ${isActive
                    ? 'bg-neutral-1000 text-brand-600'
                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-1000'
                }`
            }
        >
            <div className="flex-shrink-0">
                <Icon size={24} />
            </div>

            <AnimatePresence mode="wait">
                {!isCollapsed && (
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="font-medium whitespace-nowrap overflow-hidden"
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>

            {isCollapsed && (
                <div className="absolute left-[calc(100%+12px)] opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                    <div className="bg-neutral-1000 text-neutral-0 text-xs px-8 py-4 rounded-md whitespace-nowrap shadow-premium">
                        {label}
                    </div>
                </div>
            )}
        </NavLink>
    );
};

export default SidebarItem;
