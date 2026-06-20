import { createContext, useReducer } from "react";

export const ExpenseContext = createContext()

const initialState = {
  expenses: [],
  budget: 10000,
  theme: "light"
}

function reducer(state, action) {
  switch(action.type) {
    case "add":         return { ...state, expenses: [...state.expenses, action.payload] }
    case "remove":      return { ...state, expenses: state.expenses.filter(e => e.id !== action.payload) }
    case "clear":        return { ...state, expenses: [] }
    case "toggleTheme":  return { ...state, theme: state.theme === "light" ? "dark" : "light" }
    default:             return state
  }
}

export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <ExpenseContext.Provider value={{ state, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  )
}