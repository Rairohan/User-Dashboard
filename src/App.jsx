import { useContext } from 'react'
import { ExpenseProvider, ExpenseContext } from './Context/ExpenseContent'
import AddExpense from './component/AddExpense'
import ExpenseList from './component/ExpenseList'
import Navbar from './component/Navbar'
import Summary from './component/Summary'

function AppContent() {
  const { state } = useContext(ExpenseContext)
  return (
    <div className={`min-h-screen ${state.theme === "Dark" ? "bg-gray-900" : "bg-gray-100 text-black"}`}>
      <Navbar/>
      <AddExpense/>
      <ExpenseList/>
      <Summary/>
    </div>
  )
}

export default function App() {
  return (
    <ExpenseProvider>
      <AppContent/>
    </ExpenseProvider>
  )
}