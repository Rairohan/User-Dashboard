import React, { useContext } from "react";
import { useCallback,useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContent";

const ExpenseItem = React.memo(function ExpenseItem({expense})
{
    const {dispatch} = useContext(ExpenseContext)
    return(
        <div className="bg-gray-200 m-4 flex justify-center p-4 rounded-xl gap-4 text-2xl">
            <p>{expense.title}</p>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>
            <button 
            className="bg-red-500 p-1 rounded-xl text-white"
            onClick={()=>dispatch({type:"remove",payload:expense.id})}>Delete</button>
        </div>
    )
})
export default ExpenseItem