import React from 'react'
import {Button} from 'react-bootstrap'
import {Card} from 'react-bootstrap'


import './Services.css'


export default function Services(props) {
    return (
        
           <div style={{marginTop:'50px',marginBottom:'80px'}}>
           
           <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={props.imgs} style={{height:'250px',width:'600px'}} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
     {props.desc}
    </Card.Text>
    <p><a href="tel://8830354434"><Button className="btn" style={{width:'100%'}}><i className="fa fa-phone"></i> Inquiry</Button></a></p>
  </Card.Body>
</Card>
           
        </div>
    )
}
