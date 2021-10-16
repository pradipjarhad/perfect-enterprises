import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Home.css'
import imglogo from './images/perfect-enterprises.jpg'

// import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <div className="topMargin" style={{  }}>


      <Container>
        <div className="top-container">
          <Row>


            <Col className="one" xs={12} sm={12} md={6}>
              <p style={{ marginTop:'120px' }}>
             
                <h2>perfect enterprises</h2>
                <h1>The Gateway of All Kinds of Electrical Solution.</h1>
              </p>

            </Col>
            <Col className="image" xs={12} sm={12} md={6}>
              <p style={{  marginBottom: '100px'}}> <img src={imglogo} alt="" /></p>
            </Col>

          </Row> </div> </Container></div>

  )
}
