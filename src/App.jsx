import { ExpenseProvider } from './Context/ExpenseContent'
import AddExpense from './component/AddExpense'
import ExpenseList from './component/ExpenseList'
import Navbar from './component/Navbar'
import Summary from './component/Summary'

export default function App() {
  return (
    <ExpenseProvider>
      <Navbar/>
      <AddExpense/>
      <ExpenseList/>
      <Summary/>
    </ExpenseProvider>
  )
}