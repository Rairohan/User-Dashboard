import react, { useContext } from 'react';
import { ExpenseContext } from '../Context/ExpenseContent';
export default function Navbar(){
    const {state,dispatch} = useContext(ExpenseContext)
    return(
        <div>
            <p className="text-red-500">Total number of expense: {state.expenses.length}</p>
            <p>Theme: {state.theme}</p>
            <button onClick={()=>dispatch({type:"toggleTheme"})}>Change Theme ?</button>
        </div>
    )
}