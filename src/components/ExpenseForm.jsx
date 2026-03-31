import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title.trim() ||
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (Number(formData.amount) <= 0) {
      setError("Amount must be greater than 0.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      ...formData,
      amount: Number(formData.amount),
    };

    addExpense(newExpense);

    setFormData({
      title: "",
      amount: "",
      category: "",
      date: "",
    });

    setError("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Add New Expense</h2>

      {error && <p className="error">{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Expense Title"
        value={formData.title}
        onChange={handleChange}
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Health">Health</option>
        <option value="Other">Other</option>
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;