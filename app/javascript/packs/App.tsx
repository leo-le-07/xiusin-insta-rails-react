import React from 'react'
import ReactDOM from 'react-dom'

import HomePage from './pages/HomePage'
import AppNavbar from './components/AppNavbar'
import { NotificationProvider } from './components/notification/context'
import Notification from './components/notification'

const App = () => {
  return (
    <>
      <NotificationProvider>
        <AppNavbar />
        <HomePage />
        <Notification />
      </NotificationProvider>
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
