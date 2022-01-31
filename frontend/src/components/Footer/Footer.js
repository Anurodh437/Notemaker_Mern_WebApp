import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        backgroundColor:"#708090"
      }}
    >
      <Container>
        <Row>
          <Col style={{fontSize:'16px',color:'white'}} className="text-center py-2">Copyright &copy; NoteMaker</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
