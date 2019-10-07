import React from 'react'
import ReactDOM from 'react-dom'

import HomePage from './pages/HomePage'
import AppNavbar from './components/AppNavbar'

const App = () => {
  return (
    <>
      <AppNavbar />
      <HomePage />
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
