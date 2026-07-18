import { createContext, useReducer } from "react";

export const ExpenseContext = createContext()

const initialState = {
  expenses: [],
  budget: 10000,
  theme: "Light"
}

function reducer(state, action) {
  switch(action.type) {
    case "add":         return { ...state, expenses: [...state.expenses, action.payload] }
    case "remove":      return { ...state, expenses: state.expenses.filter(e => e.id !== action.payload) }
    case "clear":        return { ...state, expenses: [] }
    case "toggleTheme":  return { ...state, theme: state.theme === "Light" ? "Dark" : "Light" }
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