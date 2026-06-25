import React, { useContext, useMemo } from "react";
import { ExpenseContext } from "../Context/ExpenseContent";
export default function Summary(){
    const {state,dispatch} = useContext(ExpenseContext)
    const total = useMemo(()=>{
        return state.expenses.reduce((sum,expense)=> sum + expense.amount,0)
    },[state.expenses])
    const remaining = useMemo(()=>{
        return state.budget - total
    },[state.budget,total])
    return(
        <div>
            <p>Total Spent: Rs{total}</p>
            <p>Budget: Rs{state.budget}</p>
            <p> Remaining: Rs{remaining}</p>
            <button onClick={()=>dispatch({type:"clear"})}>Clear</button>
        </div>
    )
}