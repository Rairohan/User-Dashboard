import react from 'react';  
import { useContext } from 'react';
import { ExpenseContext } from '../Context/ExpenseContent';
import ExpenseItem from './ExpenseItem';
export default function ExpenseList(){
    const {state} = useContext(ExpenseContext)
    return(
        <div>
           { 
                state.expenses.map((expense)=>
                (
                    <ExpenseItem key={expense.id} expense={expense}/>
                ))

            }              
        </div>
    )
}