import React, { useState } from 'react';
import {
    LayoutDashboard,
    CreditCard,
    ArrowLeftRight,
    User,
    Target,
    LogOut,
    PanelLeftClose,
    PanelLeftOpen
} from 'lucide-react';
import { motion } from 'framer-motion';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
    // Começa expandido por padrão conforme design desktop
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    // TODO: Adicionar caminhos reais quando as rotas estiverem prontas
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
            animate={{
                width: isCollapsed ? 120 : 300, // 300px Fixed Width (Figma)
            }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="h-screen bg-white border-r border-neutral-200 flex flex-col py-8 sticky top-0 z-40 overflow-hidden"
        >
            {/* CONTAINER PRINCIPAL com padding 32px (Figma: padding: 32px) */}
            <div className={`flex flex-col h-full px-8 ${isCollapsed ? 'items-center px-4' : ''}`}> {/* 32px = px-8 Tailwind v4 spacing scale? Verify. No, px-8 is 2rem = 32px usually. */}

                {/* --- HEADER: Logic + Menu Toggle --- */}
                {/* Figma: Frame 174 Gap: 56px (Logo to Menu) */}
                <div className={`flex flex-col gap-14 transition-all duration-300 w-full mb-10`}>

                    {/* Logo Area */}
                    <div className="flex items-center justify-between h-[40px] w-full">
                        {/* Logo Simbólico (Placeholder) */}
                        <div className={`flex items-center gap-3 ${isCollapsed ? 'justify-center w-full' : ''}`}>
                            <div className="w-10 h-10 bg-[#D7FF00] rounded-xl flex items-center justify-center flex-shrink-0">
                                <span className="text-[#080B12] font-bold text-xl">$</span>
                            </div>
                            {!isCollapsed && (
                                <span className="text-xl font-bold text-[#080B12]">
                                    mycash<span className="text-[#D7FF00]">+</span>
                                </span>
                            )}
                        </div>

                        {/* Toggle Button (Internal) - Melhor UX que flutuante externo */}
                        {!isCollapsed && (
                            <button onClick={toggleSidebar} className="text-neutral-400 hover:text-neutral-900 transition-colors">
                                <PanelLeftClose size={20} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Se estiver colapsado, mostra botão de abrir abaixo do logo */}
                {isCollapsed && (
                    <button onClick={toggleSidebar} className="mb-8 text-neutral-400 hover:text-neutral-900 transition-colors">
                        <PanelLeftOpen size={24} />
                    </button>
                )}

                {/* --- NAVIGATION MENU (Frame 175-ish logic but inside Frame 174 in Figma) --- */}
                {/* Gap: 8px (Figma) between items */}
                <nav className="flex-1 flex flex-col gap-2 w-full">
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

                {/* --- FOOTER (Frame 175) --- */}
                {/* Gap: 12px (Figma) */}
                <div className="mt-auto flex flex-col gap-3 pt-8 w-full">

                    {/* Logout Button */}
                    <button
                        className={`flex items-center gap-3 text-neutral-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300 ${isCollapsed ? 'justify-center w-10 h-10 p-0 mx-auto' : 'px-4 py-3 h-[48px] w-full'}`}
                        title="Sair"
                    >
                        <LogOut size={20} />
                        {!isCollapsed && <span className="font-semibold text-sm">Sair</span>}
                    </button>

                    {/* Profile User (Figma: dados-usuário 160x47) */}
                    {/* Vamos fazer um card mais bonito que o simples texto */}
                    <div className={`flex items-center gap-3 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'bg-neutral-50 p-3 rounded-2xl'}`}>
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Isabel"
                            alt="Profile"
                            className="w-10 h-10 rounded-full bg-neutral-200 object-cover flex-shrink-0 border border-neutral-200"
                        />
                        {!isCollapsed && (
                            <div className="flex flex-col overflow-hidden">
                                <span className="text-sm font-bold text-[#080B12] truncate">Isabel Dappen</span>
                                <span className="text-xs text-neutral-500 truncate">isabel@mycash.com</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.aside>
    );
};

export default Sidebar;
