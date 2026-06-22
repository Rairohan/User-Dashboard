import { useState, useContext } from "react";
import { ExpenseContext } from "./../Context/ExpenseContent";

export default function AddExpense(){
  const { dispatch } = useContext(ExpenseContext)
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("food")

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={() => dispatch({ 
        type: "add", 
        payload: { id: Date.now(), title, amount: Number(amount), category } 
      })}>    
        Add Expense
      </button>
    </div>
  )
}