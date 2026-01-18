
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SummaryCardProps {
    title: string;
    value: number;
    icon: LucideIcon;
    iconColor?: string; // Hex color for icon
    iconBgColor?: string; // Hex color for icon bg
    trend?: number; // percentage
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon: Icon, iconColor = '#000', iconBgColor = '#F5F5F5' }) => {
    return (
        <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between h-[206px] min-w-[250px] shadow-sm border border-neutral-100">
            {/* Header */}
            <div className="flex flex-col gap-4">
                <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: iconBgColor, color: iconColor }}
                >
                    <Icon size={20} />
                </div>
                <span className="text-neutral-500 font-medium text-lg">{title}</span>
            </div>

            {/* Value */}
            <span className="text-neutral-900 text-3xl font-bold tracking-tight">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}
            </span>
        </div>
    );
};

export default SummaryCard;
