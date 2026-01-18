export type TransactionType = 'income' | 'expense';

export type TransactionCategory =
    | 'Aluguel'
    | 'Alimentação'
    | 'Compras'
    | 'Moradia'
    | 'Transporte'
    | 'Saúde'
    | 'Lazer'
    | 'Outros';

export interface FamilyMember {
    id: string;
    name: string;
    avatarUrl: string;
    role: string;
    monthlyIncome?: number;
}

export interface BankAccount {
    id: string;
    name: string;
    balance: number;
    type: 'checking' | 'savings' | 'investment';
    bankName: string;
}

export interface CreditCard {
    id: string;
    name: string;
    limit: number;
    used: number;
    closingDay: number;
    dueDate: number;
    brand: string; // e.g. 'Nubank', 'Inter'
    color: string; // Theme color
}

export interface Transaction {
    id: string;
    type: TransactionType;
    description: string;
    amount: number;
    date: string; // ISO format
    category: TransactionCategory;
    memberId: string;
    sourceId: string; // id of BankAccount or CreditCard
    installments?: {
        current: number;
        total: number;
    };
    status: 'paid' | 'pending';
}

export interface Goal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    deadline?: string;
}
