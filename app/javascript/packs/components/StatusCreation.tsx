import React from 'react'
import styled from 'styled-components'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const StatusCreation = () => {
  const [statusText, setStatusText] = React.useState('')

  return (
    <StyledContainer>
      <Form.Control
        as="textarea"
        value={statusText}
        placeholder="What's on your mind"
        onChange={(event) => setStatusText(event.currentTarget.value || '')}
        rows="3"
      />
      <div className="actions">
        <a href="#">Attach image</a>
        <Button variant="primary">Post</Button>
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

