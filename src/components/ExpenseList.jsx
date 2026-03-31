function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="expense-list">
      <h2>Expense History</h2>

      {expenses.length === 0 ? (
        <p className="empty-message">No expenses added yet 🚀</p>
      ) : (
        expenses.map((expense) => (
          <div className="expense-item" key={expense.id}>
            <div className="expense-info">
              <h3>{expense.title}</h3>
              <p>Category: {expense.category}</p>
              <small>Date: {expense.date}</small>
            </div>

            <div className="expense-actions">
              <span className="expense-amount">Rs. {expense.amount}</span>
              <button onClick={() => deleteExpense(expense.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;