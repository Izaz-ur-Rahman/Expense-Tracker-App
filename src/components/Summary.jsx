
function Summary({ expenses }) {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="summary-box">
      <div className="summary-item">
        <h3>Total Expenses</h3>
        <p>Rs. {totalAmount.toFixed(2)}</p>
      </div>

      <div className="summary-item">
        <h3>Total Entries</h3>
        <p>{expenses.length}</p>
      </div>
    </div>
  );
}

export default Summary;