import React, { useState, useRef } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const StatusCreation = () => {
  const inputElement = useRef<HTMLInputElement>(null)
  const [content, setContent] = useState<string>('')
  const [files, setFiles] = useState([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

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
    } catch (err) {
      setError(err.message)
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
          disabled={loading}
          onClick={handleClick}
        >
          Post
        </Button>
      </div>
      {error && <div>{error}</div>}
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

