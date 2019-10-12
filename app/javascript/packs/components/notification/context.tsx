import React, { createContext, useReducer } from 'react'

interface IState {
  message: string,
  type: string,
}

type IAction =
  | { type: 'SHOW_SUCCESS_NOTIFICATION'; payload: string }
  | { type: 'SHOW_ERROR_NOTIFICATION'; payload: string }
  | { type: 'RESET' }

const initialStates: IState = {
  message: '',
  type: '',
}

let reducer = (
  state: IState,
  action: IAction,
) => {
  switch (action.type) {
    case "SHOW_SUCCESS_NOTIFICATION":
      return { ...state, message: action.payload, type: 'success' }
    case "SHOW_ERROR_NOTIFICATION":
      return { ...state, message: action.payload, type: 'error' }
    case "RESET":
      return { ...state, message: '', type: '' }
    default:
      return state
  }
}

const NotificationContext = createContext<any>(initialStates)

const NotificationProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialStates)

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NotificationContext.Provider>
  )
}


export { NotificationProvider, NotificationContext }
