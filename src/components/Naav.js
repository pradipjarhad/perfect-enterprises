import React from 'react'
import {Container,Col,Row} from 'react-bootstrap'
import './NavBar.css'
import houseWiring from './images/house-wiring.jpg'
import industrialWork from './images/industrial-wiring.jpg'
import electricProducts from './images/electrical-goods.jpg'
import invertor from './images/invertor.jpg'
import maintenance from './images/maintenance.jpg'
import consultant from './images/consultant.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  NavLink
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';

export default function Naav() {
    const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
    return (
        <Router>
        <div>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Perfect Enterprises
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/About"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/Contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav> </div>

      <div className="pages">
          <Switch>
            <Route exact path="/">
            <Home/>
            </Route>

            
            <Route path="/About">
            <About/>
            </Route>

            <Route path="/Services">
            <Container>
            
            <Row className="text-center">
            <Col xs={12} sm={12} md={4}> 
            <Services title="Electrical Products" imgs={electricProducts} desc="We sell and supplies all electrical products and accessories."/>
            </Col>

            <Col xs={12} sm={12} md={4}> 
            <Services title="Invertor and Batteries" imgs={invertor} desc="We sell and supplies invertor and batteries at wholesale rate."/>
            </Col>

           <Col xs={12} sm={12} md={4}>
            <Services title="Residential Electrical Works" imgs={houseWiring} desc="We do all types of electrical work and house wiring."/>
            </Col>

           <Col xs={12} sm={12} md={4}>
            <Services title="Industrial Electrical Works" imgs={industrialWork} desc="We do all types of panel fitting and wiring work."/>
            </Col>

           <Col xs={12} sm={12} md={4}>
            <Services title="Electrical Maintenance" imgs={maintenance} desc="We do all types of electrical and electronics maintenance."/>
            </Col>

           <Col xs={12} sm={12} md={4}>
            <Services title="Contract and Consultation" imgs={consultant} desc="We are always open for electrical contract and consultation."/>
            </Col>
            </Row>
          
            </Container>
            </Route>

            <Route path="/Contact" >
            <Contact/>
            </Route>
          </Switch>
        </div>


    </Router>
                
    )
}
