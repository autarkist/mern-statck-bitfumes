import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    const res = await fetch("http://localhost:400/transaction", {
      method: "POST",
      body: form,
    })
    console.log(res);
  };

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name] : e.target.value });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="number"
        name="amount"
        onChange={handleInput}
        value={form.amount}
        placeholder="Enter transaction amount"
        step="1000"
      />
      <input
        type="text"
        name="description"
        onChange={handleInput}
        value={form.description}
        placeholder="Enter transaction details"
      />
      <input type="date" name="date" onChange={handleInput} value={form.date} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
