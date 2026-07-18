import React, { useContext } from "react";
import { useCallback,useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContent";

const ExpenseItem = React.memo(function ExpenseItem({expense})
{
    const {dispatch} = useContext(ExpenseContext)
    return(
        <div className="bg-gray-200 m-4 flex justify-between items-center  p-4 rounded-xl  text-2xl max-w-3xl w-full mx-auto">
            <p> <span className="font-bold text-3xl">Title: </span>{expense.title}</p>
            <p> <span className="font-bold text-3xl">Amount: </span>{expense.amount}</p>
            <p> <span className="font-bold text-3xl">Category: </span>{expense.category}</p>
            <button 
            className="bg-red-500 p-2 rounded-xl text-white hover:bg-red-800"
            onClick={()=>dispatch({type:"remove",payload:expense.id})}>Delete</button>
        </div>
    )
})
export default ExpenseItem