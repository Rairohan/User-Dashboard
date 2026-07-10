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
        <div className="justify-items-center bg-gray-200 p-5 md-5 rounded-xl max-w-3xl mx-auto w-full" >
            <p className="text-2xl m-1">Total Spent: Rs {total}</p>
            <p className="text-2xl m-1">Budget: Rs {state.budget}</p>
            <p className="text-2xl m-1"> Remaining: Rs {remaining}</p>
            <div >
                 <button  className="bg-blue-600 text-white px-4 rounded-md text-xl m-1 hover:bg-blue-900" onClick={()=>dispatch({type:"clear"})}>Clear</button>
            </div>
        </div>
    )
}