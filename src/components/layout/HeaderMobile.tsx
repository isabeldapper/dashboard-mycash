
import React, { useState } from 'react';
import { Menu, X, LogOut, LayoutDashboard, CreditCard, ArrowLeftRight, User, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HeaderMobile: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
        { icon: CreditCard, label: 'Meus Cartões', to: '/cartoes' },
        { icon: ArrowLeftRight, label: 'Transações', to: '/transacoes' },
        { icon: Target, label: 'Minhas Metas', to: '/metas' },
        { icon: User, label: 'Meu Perfil', to: '/perfil' },
    ];

    return (
        <>
            {/* Mobile Header - Fixed Top */}
            <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-neutral-200 flex items-center justify-between px-4 z-50 lg:hidden">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#D7FF00] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-[#080B12] font-bold text-lg">$</span>
                    </div>
                    <span className="text-lg font-bold text-[#080B12]">
                        mycash<span className="text-[#D7FF00]">+</span>
                    </span>
                </div>

                {/* Avatar / Menu Trigger */}
                <button
                    onClick={toggleMenu}
                    className="w-10 h-10 rounded-full bg-neutral-100 overflow-hidden border border-neutral-200 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Isabel"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </button>
            </header>

            {/* Mobile Navigation Menu Dropdown/Slide-in */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black z-40 lg:hidden"
                        />

                        {/* Menu Panel - Sliding from Right */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 flex flex-col shadow-2xl lg:hidden"
                        >
                            {/* Header inside Menu */}
                            <div className="flex items-center justify-between p-4 border-b border-neutral-100">
                                <span className="font-bold text-lg text-neutral-900">Menu</span>
                                <button onClick={toggleMenu} className="p-2 text-neutral-500 hover:text-neutral-900 rounded-lg bg-neutral-50">
                                    <X size={20} />
                                </button>
                            </div>

                            {/* User Info */}
                            <div className="p-4 border-b border-neutral-100 flex items-center gap-3 bg-neutral-50">
                                <img
                                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Isabel"
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full border border-neutral-200 bg-white"
                                />
                                <div className="flex flex-col overflow-hidden">
                                    <span className="text-sm font-bold text-neutral-900 truncate">Isabel Dapper</span>
                                    <span className="text-xs text-neutral-500 truncate">isabel@mycash.com</span>
                                </div>
                            </div>

                            {/* Navigation Items */}
                            <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.to}
                                        to={item.to}
                                        onClick={toggleMenu}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-medium"
                                    >
                                        <item.icon size={20} />
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>

                            {/* Footer Actions */}
                            <div className="p-4 border-t border-neutral-100 mb-safe"> {/* mb-safe para suportar safe area do iOS se precisassemos */}
                                <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium">
                                    <LogOut size={20} />
                                    Sair
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Spacer to prevent content from hiding behind fixed header */}
            <div className="h-16 lg:hidden" />
        </>
    );
};

export default HeaderMobile;
