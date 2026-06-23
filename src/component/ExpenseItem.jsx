import React, { useContext } from "react";
import { useCallback,useState } from "react";
import { ExpenseContext } from "../Context/ExpenseContent";

const ExpenseItem = React.memo(function ExpenseItem({expense})
{
    const {dispatch} = useContext(ExpenseContext)
    return(
        <div>
            <p>{expense.title}</p>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>
            <button onClick={()=>dispatch({type:"remove",payload:expense.id})}>Delete</button>
        </div>
    )
})
export default ExpenseItem