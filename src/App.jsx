import { ExpenseProvider } from './Context/ExpenseContent'
import AddExpense from './component/AddExpense'
import ExpenseList from './component/ExpenseList'
import Summary from './component/Summary'

export default function App() {
  return (
    <ExpenseProvider>
      <AddExpense/>
      <ExpenseList/>
      <Summary/>
    </ExpenseProvider>
  )
}