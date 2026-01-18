
import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import {
    Transaction,
    CreditCard,
    BankAccount,
    FamilyMember,
    Goal,
    TransactionType
} from '../types';

// Mock Data (Initial State)
const INITIAL_MEMBERS: FamilyMember[] = [
    { id: '1', name: 'Isabel Dapper', role: 'Admin', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Isabel', monthlyIncome: 12000 },
    { id: '2', name: 'Renan', role: 'Member', avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Renan', monthlyIncome: 8500 }
];

const INITIAL_ACCOUNTS: BankAccount[] = [
    { id: 'acc1', name: 'Conta Principal', bankName: 'Nubank', type: 'checking', balance: 4500.50 },
    { id: 'acc2', name: 'Reserva', bankName: 'Inter', type: 'savings', balance: 12000.00 }
];

const INITIAL_CARDS: CreditCard[] = [
    { id: 'card1', name: 'Nubank Ultravioleta', brand: 'Nubank', limit: 25000, used: 4250.90, closingDay: 5, dueDate: 12, color: '#820AD1' },
    { id: 'card2', name: 'Inter Black', brand: 'Inter', limit: 15000, used: 1200.00, closingDay: 10, dueDate: 18, color: '#FF7A00' }
];

const INITIAL_GOALS: Goal[] = [
    { id: 'g1', name: 'Viagem Europa', targetAmount: 30000, currentAmount: 12500, deadline: '2026-12-01' },
    { id: 'g2', name: 'Carro Novo', targetAmount: 80000, currentAmount: 25000 }
];

const INITIAL_TRANSACTIONS: Transaction[] = [
    { id: 't1', type: 'expense', description: 'Supermercado', amount: 850.20, category: 'Alimentação', date: '2026-01-15', memberId: '1', sourceId: 'card1', status: 'paid' },
    { id: 't2', type: 'income', description: 'Salário Mensal', amount: 12000, category: 'Outros', date: '2026-01-05', memberId: '1', sourceId: 'acc1', status: 'paid' },
    { id: 't3', type: 'expense', description: 'Aluguel', amount: 3200, category: 'Moradia', date: '2026-01-10', memberId: '1', sourceId: 'acc1', status: 'paid' },
    { id: 't4', type: 'expense', description: 'Uber', amount: 45.90, category: 'Transporte', date: '2026-01-18', memberId: '2', sourceId: 'card2', status: 'pending' }
];

interface FinanceContextData {
    // State
    transactions: Transaction[];
    cards: CreditCard[];
    accounts: BankAccount[];
    members: FamilyMember[];
    goals: Goal[];

    // Filters
    selectedMonth: Date;
    setSelectedMonth: (date: Date) => void;

    // Computed / Helpers
    totalBalance: number;
    totalIncome: number;
    totalExpenses: number;

    // Actions (CRUD)
    addTransaction: (t: Omit<Transaction, 'id'>) => void;
    deleteTransaction: (id: string) => void;
    addCard: (c: Omit<CreditCard, 'id'>) => void;
    addGoal: (g: Omit<Goal, 'id'>) => void;
    addMember: (m: Omit<FamilyMember, 'id'>) => void;
}

const FinanceContext = createContext<FinanceContextData>({} as FinanceContextData);

export const FinanceProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Core State
    const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
    const [cards, setCards] = useState<CreditCard[]>(INITIAL_CARDS);
    const [accounts, setAccounts] = useState<BankAccount[]>(INITIAL_ACCOUNTS);
    const [members, setMembers] = useState<FamilyMember[]>(INITIAL_MEMBERS);
    const [goals, setGoals] = useState<Goal[]>(INITIAL_GOALS);

    // Filter State
    const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());

    // --- Computed Values (Memoized for performance) ---
    const totalBalance = useMemo(() => {
        return accounts.reduce((acc, curr) => acc + curr.balance, 0);
    }, [accounts]);

    const totalIncome = useMemo(() => {
        // Simple logic: Sum all 'income' transactions (optionally filtered by month, 
        // but for now global or we can filter inside the hook consumers)
        // Let's keep it simple: Total ALL time for now or assume filtering happens at UI level.
        // Prompt says "CRUD functions... and global filters". Let's provide raw data mostly.
        return transactions
            .filter(t => t.type === 'income')
            .reduce((acc, t) => acc + t.amount, 0);
    }, [transactions]);

    const totalExpenses = useMemo(() => {
        return transactions
            .filter(t => t.type === 'expense')
            .reduce((acc, t) => acc + t.amount, 0);
    }, [transactions]);

    // --- Actions ---

    const addTransaction = (t: Omit<Transaction, 'id'>) => {
        const newTransaction = { ...t, id: crypto.randomUUID() };
        setTransactions(prev => [newTransaction, ...prev]);

        // Logic to update Account Balance if status is 'paid' (simple version)
        if (t.status === 'paid' && t.type === 'expense') {
            // Find account
            setAccounts(prev => prev.map(acc => {
                if (acc.id === t.sourceId) {
                    return { ...acc, balance: acc.balance - t.amount };
                }
                return acc;
            }));
            // Or update card limit used? 
            setCards(prev => prev.map(card => {
                if (card.id === t.sourceId) {
                    return { ...card, used: card.used + t.amount };
                }
                return card;
            }));
        }
    };

    const deleteTransaction = (id: string) => {
        setTransactions(prev => prev.filter(t => t.id !== id));
    };

    const addCard = (c: Omit<CreditCard, 'id'>) => {
        const newCard = { ...c, id: crypto.randomUUID() };
        setCards(prev => [...prev, newCard]);
    };

    const addGoal = (g: Omit<Goal, 'id'>) => {
        const newGoal = { ...g, id: crypto.randomUUID() };
        setGoals(prev => [...prev, newGoal]);
    };

    const addMember = (m: Omit<FamilyMember, 'id'>) => {
        const newMember = { ...m, id: crypto.randomUUID() };
        setMembers(prev => [...prev, newMember]);
    };

    return (
        <FinanceContext.Provider value={{
            transactions,
            cards,
            accounts,
            members,
            goals,
            selectedMonth,
            setSelectedMonth,
            totalBalance,
            totalIncome,
            totalExpenses,
            addTransaction,
            deleteTransaction,
            addCard,
            addGoal,
            addMember
        }}>
            {children}
        </FinanceContext.Provider>
    );
};

export const useFinance = () => useContext(FinanceContext);
