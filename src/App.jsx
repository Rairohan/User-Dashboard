import { ExpenseProvider } from './Context/ExpenseContent'
import AddExpense from './component/AddExpense'

export default function App() {
  return (
    <ExpenseProvider>
      <AddExpense/>
    </ExpenseProvider>
  )
}