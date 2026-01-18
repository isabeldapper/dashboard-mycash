
import React from 'react';
import { Wallet } from 'lucide-react';
import { useFinance } from '../../contexts/FinanceContext';

const BalanceCard: React.FC = () => {
    const { totalBalance } = useFinance();

    return (
        <div className="bg-white rounded-[20px] p-6 flex flex-col justify-between h-[206px] min-w-[250px] shadow-sm border border-neutral-100 relative overflow-hidden">
            {/* Header: Icon + Title */}
            <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-900">
                    <Wallet size={20} />
                </div>
                <span className="text-neutral-900 font-semibold text-lg">Saldo total</span>
            </div>

            {/* Value Section */}
            <div className="flex flex-col gap-1">
                <span className="text-[#2A89EF] text-3xl font-bold tracking-tight">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalBalance)}
                </span>
                {/* Optional Badge based on Figma investigation (if needed later) */}
            </div>

            {/* Decorative / Background Blur if needed (Figma showed generic white but prompt mentioned blur - keeping clean for now as per Node 42:3108) */}
        </div>
    );
};

export default BalanceCard;
