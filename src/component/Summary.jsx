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
            <div className="justify-items-left">
            <p className="text-2xl m-1"><span className="font-bold">Total Spent: </span>Rs {total}</p>
            <p className="text-2xl m-1"><span className="font-bold">Budget: </span>Rs {state.budget}</p>
            <p className="text-2xl m-1"><span className="font-bold">Remaining: </span>Rs {remaining}</p>
            </div>
             <div >
                 <button  className="bg-blue-600 text-white px-4 py-1 rounded-md text-2xl m-1 hover:bg-blue-900" onClick={()=>dispatch({type:"clear"})}>Clear</button>
            </div>
        </div>
    )
}