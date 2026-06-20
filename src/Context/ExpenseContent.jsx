import React, { Children, createContext } from "react";
import { useReducer,useContext } from "react";
export default ExpenseContext = createContext()
const initalState ={
    expenses :[],
    budget:10000,
    theme:"light"
}
export function reducer(state,action){
    switch(action.type){
        case "add": return { ...state, expenses: [...state.expenses, action.payload] } 
        case "remove": return { ...state, expenses: state.expenses.filter(e => e.id !== action.payload) }  
        case "clear": return { ...state, expenses: [] }
        case "toggleTheme": return { ...state, theme: state.theme === "light" ? "dark" : "light" } 
        default: return state

    }
}
export function ExpenseContent({Children}){
    const [state,dispatch] = useReducer(reducer,initalState)
    return(
        <ExpenseContext.Provider value={{state,dispatch}}>
            {Children}
        </ExpenseContext.Provider>
    )
}