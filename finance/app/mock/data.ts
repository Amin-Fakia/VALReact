const calcChange = (value: number, percentChange: number) => {
    const changeAmount = (value * percentChange) / 100;
    return changeAmount;
}

const calcMonthlyGrowth = (balance: number) => {
    // Placeholder logic for monthly growth calculation
    return balance * 0.125; // Assume a fixed 12.5% growth for demonstration
}

export const user = {
    name: 'Amin Fakia',
    email: 'amin.fakia@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    premium: true
};

// Fixed values
const income = 2312.17;
const savings = 2020.00;
const totalBalance = income + savings;

// Calculated values
const expenses = income - savings; // Expenses = Income - Savings
export const userBalance = totalBalance;

export const transactions = [
    { name: 'Grocery Store', amount: `-€${(expenses * 0.514).toFixed(2)}`, category: 'Food', time: '2h ago' },
    { name: 'Coffee Shop', amount: `-€${(expenses * 0.015).toFixed(2)}`, category: 'Food', time: '5h ago' },
    { name: 'Salary Deposit', amount: `+€${income.toFixed(2)}`, category: 'Income', time: '1d ago' },
    { name: 'Electric Bill', amount: `-€${(expenses * 0.411).toFixed(2)}`, category: 'Utilities', time: '2d ago' },
];

export const stats = [
    { label: 'Total Balance', value: `€${userBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, change: '+1.5%' },
    { label: 'Income', value: `€${income.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, change: '+8.2%' },
    { label: 'Expenses', value: `€${expenses.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, change: '-4.3%' },
    { label: 'Savings', value: `€${savings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, change: '+15.8%' },
];
