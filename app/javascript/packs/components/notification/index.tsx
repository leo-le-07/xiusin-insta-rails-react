import React, { useContext, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { NotificationContext } from './context'

const Notification = () => {
  const { state, dispatch } = useContext(NotificationContext)

  useEffect(() => {
    if (state.message === '') return

    if (state.type === 'success') {
      toast.success(state.message)
    }

    if (state.type === 'error') {
      toast.error(state.message)
    }

    dispatch({ type: 'RESET' })
  }, [state.message])

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
    </>
  )
}

export default Notification

