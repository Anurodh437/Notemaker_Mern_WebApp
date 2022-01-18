import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">
                Welcome to
                <br /> NoteMaker
              </h1>
              <p className="subtitle">Best Place to keep all your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" id="landButton" className="landingButton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button
                  size="lg"
                  className="landingButton"
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </a> 
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
