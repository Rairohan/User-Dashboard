import { useState, useContext } from "react";
import { ExpenseContext } from "./../Context/ExpenseContent";

export default function AddExpense(){
  const { dispatch } = useContext(ExpenseContext)
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("food")

  return (
     <div className="flex flex-col gap-2 p-5">
  <div className="bg-gray-200 shadow-md rounded-md p-5 mb-5 max-w-3xl mx-auto w-full">
    <div className="flex flex-col gap-2 p-5">
      <div className= "flex justify-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Add New Expense</h2>
      </div> 
      <input
        className="border border-gray-400 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 mb-3"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
      className = "border border-gray-400 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 mb-3"
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        className="border border-gray-400 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 mb-3"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <div className="flex justify-end mt-2">
      <button 
        className="  w-40 bg-blue-500 text-white px-1 py-2 rounded-md hover:bg-blue-700 transition duration-300 "
        onClick={() => dispatch({ 
        type: "add", 
        payload: { id: Date.now(), title, amount: Number(amount), category } 
        })}>    
        Add Expense
      </button>
      </div> 
      </div>
    </div>
    </div>
  )
}