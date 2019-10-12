import React, { useState, useRef, useContext, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { NotificationContext } from '../components/notification/context'

const StatusCreation = () => {
  const inputElement = useRef<HTMLInputElement>(null)
  const { dispatch } = useContext(NotificationContext)
  const [content, setContent] = useState<string>('')
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState<boolean>(false)

  const [enableSubmit, setEnableSubmit] = useState<boolean>(false)
  useEffect(() => {
    if (loading || (content === '' && files.length === 0)) {
      setEnableSubmit(false)
    } else {
      setEnableSubmit(true)
    }
  })

  const handleClick = async () => {
    setLoading(true)

    try {
      const formData = new FormData()

      for (let i = 0; i < files.length; i++) {
        formData.append(`images[${i}]`, files[i])
      }
      formData.append('content', content)

      await axios.post('/v1/posts', formData)

      setContent('')
      setFiles([])
      if (inputElement !== null && inputElement.current !== null) {
        inputElement!.current!.value = ''
      }

      dispatch({
        type: 'SHOW_SUCCESS_NOTIFICATION',
        payload: 'Create post successfully',
      })
    } catch (err) {
      dispatch({
        type: 'SHOW_ERROR_NOTIFICATION',
        payload: `Ceate post failed: ${err.message}`,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSelectImage = (event: any) => {
    setFiles(event.target.files)
  }

  return (
    <StyledContainer>
      <Form.Control
        as="textarea"
        value={content}
        placeholder="What's on your mind"
        onChange={(event) => setContent(event.currentTarget.value || '')}
        rows="3"
      />
      <div className="actions">
        <input
          ref={inputElement}
          type="file"
          multiple
          onChange={handleSelectImage}
        />
        <Button
          variant="primary"
          disabled={!enableSubmit}
          onClick={handleClick}
        >
          Post
        </Button>
      </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
  }
`

export default StatusCreation

