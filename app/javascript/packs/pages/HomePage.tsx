import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import StatusCreation from '../components/StatusCreation'

const HomePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="status">
            <StatusCreation />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
