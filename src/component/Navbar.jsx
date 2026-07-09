import react, { useContext } from 'react';
import { ExpenseContext } from '../Context/ExpenseContent';
export default function Navbar(){
    const {state,dispatch} = useContext(ExpenseContext)
    return(
       <nav className='flex justify-between items-center bg-blue-600 text-white text-2xl p-5'>
        <h1 className="text-5xl">💰 Expense Tracker</h1>
        <div className='flex items-center gap-4'>
            <p className='p-2'>Expenses: {state.expenses.length}</p>
            <p className='p-2'>Theme: {state.theme}</p>
            <button 
                className='bg-white text-blue-800 px-3 py-1 rounded-md hover:bg-gray-300 transition duration-400 hover:text-blue hover:scale-105' 
                onClick={() => dispatch({ type: "toggleTheme" })}>
                Toggle Theme
            </button>
         </div>
        </nav>
     )
}