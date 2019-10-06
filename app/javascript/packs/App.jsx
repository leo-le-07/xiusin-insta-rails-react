
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <>
      <h1>Hello Leo</h1>
    </>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
