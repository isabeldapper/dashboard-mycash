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
                `flex items-center gap-3 px-4 h-[48px] rounded-xl transition-all duration-200 group relative font-semibold ${isActive
                    ? 'bg-[#D7FF00] text-[#080B12] shadow-sm'
                    : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900'
                }`
            }
        >
            <div className="flex-shrink-0">
                <Icon
                    size={24}
                    className="transition-colors duration-300"
                />
            </div>

            <AnimatePresence mode="wait" initial={false}>
                {!isCollapsed && (
                    <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: 'auto' }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="font-medium whitespace-nowrap overflow-hidden"
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>

            {isCollapsed && (
                <div className="absolute left-[calc(100%+16px)] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-[-10px] group-hover:translate-x-0 z-50">
                    <div className="bg-neutral-1100 text-neutral-0 text-xs px-12 py-6 rounded-lg whitespace-nowrap shadow-premium border border-neutral-800">
                        {label}
                        {/* Tooltip Arrow alternative */}
                        <div className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-8 h-8 bg-neutral-1100 rotate-45 border-l border-b border-neutral-800" />
                    </div>
                </div>
            )}
        </NavLink>
    );
};

export default SidebarItem;
