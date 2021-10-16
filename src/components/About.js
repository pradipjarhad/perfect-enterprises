import React from 'react'
import {Card, Button, Container} from 'react-bootstrap'
import './About.css'

export default function About() {
    return (
      <div style={{marginTop:'20px' , marginBottom:'20px'}}>
      
        <Container floud>
        
            <Card className="text-center">
            
  <Card.Header>About Us</Card.Header>
  <Card.Body>
    <Card.Title>Perfect Electrical Enterprises</Card.Title>
    <Card.Title>Owned by Mr. Naresh Bhagat</Card.Title>
    <Card.Text>
    <p>If you must be tired of searching for the best electrician or electrician contractor then 
    your search is over now Because we are not only the best in our work but also absolutely Perfect.</p>
    <p>We are working in the electrical field since more than 10 years and 
    we have given best service to our customers. In these amazing years, we have covered a lot of work areas. 
    We provide different typed services to our customers.</p>

    <p>Feel free to reach us...</p>



    </Card.Text>
    <a href="https://wa.me/918830354434"><Button className="btn"><i className="fa fa-whatsapp"></i> WhatsApp</Button></a>
    <a href="tel://8830354434"><Button className="btn"><i className="fa fa-phone"></i> Call Us</Button></a>
    {/* <Button variant="primary" className="bi bi-phone">Go somewhere</Button> */}
  </Card.Body>
  
</Card>
        </Container></div>
    )
}
