import { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./LandingPage.css";

const LandingPage = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <div className="title">Welcome to</div>
              <br />
              <div className="title1">NoteMaker</div>
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
