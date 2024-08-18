const summaryData = {
  totalExpenses: 1200.5, // Total spent this month
  remainingBudget: 800.0, // Remaining budget for the month
  savingsProgress: 75, // Progress in percentage
  netBalance: 400.0, // Optional: Income - Expenses
};

const recentTransactions = [
  {
    id: "1",
    date: "2024-08-01",
    category: "Groceries",
    amount: 150.0,
    description: "Weekly grocery shopping",
  },
  {
    id: "2",
    date: "2024-08-05",
    category: "Dining Out",
    amount: 45.75,
    description: "Dinner at Italian restaurant",
  },
  {
    id: "3",
    date: "2024-08-08",
    category: "Transport",
    amount: 30.5,
    description: "Taxi fare",
  },
];

const savingsGoals = [
  {
    id: "goal-1",
    name: "Wedding Fund",
    targetAmount: 5000.0,
    currentAmount: 3750.0,
    deadline: "2024-12-01", // Deadline for the goal
    progress: 75, // Progress in percentage
  },
  {
    id: "goal-2",
    name: "Honeymoon Trip",
    targetAmount: 3000.0,
    currentAmount: 1500.0,
    deadline: "2025-01-15",
    progress: 50,
  },
];

const spendingBreakdown = [
  { category: "Groceries", amount: 400.0 },
  { category: "Dining Out", amount: 150.0 },
  { category: "Transport", amount: 100.0 },
  { category: "Utilities", amount: 250.0 },
  { category: "Entertainment", amount: 300.0 },
];

export default {
  spendingBreakdown,
  summaryData,
  recentTransactions,
  savingsGoals,
};
