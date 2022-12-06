import React from 'react'
import { Button, Container, Row } from "react-bootstrap";
import './LandingPage.css'


function LandingPage() {
  return (
    <div className="main">
    <Container>
      <Row>
        <div className="intro-text">
          <div>
            <h1 className="title">Welcome to Note Zipper</h1>
            <p className="subtitle">One Safe place for all your notes.</p>
          </div>
          <div className="buttonContainer">
          
              <Button size="lg" className="landingbutton" variant="outline-success">
                Login
              </Button>
          
           
              <Button
                variant="outline-primary"
                size="lg"
                className="landingbutton"
              >
                Signup    
              </Button>
         
          </div>
        </div>
      </Row>
    </Container>
  </div>
  )
}

export default LandingPage