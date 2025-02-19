import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './loginpage.css';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'; // Import the Google icon from react-icons
import './GoogleSignInButton.css'; // Import your CSS for additional styling


const LoginPage = () => {
  const navigate = useNavigate();
  
  return (
    <Container fluid className="login-container">
      <Row>
        <Col md={6} className="left-section">
          <div className="logo">
            <h1>Excel Tech Consulting</h1>
            <img src="/images/login.jpg" alt="Electronic components" className="left-image" />
          </div>
        </Col>
        <Col md={6} className="right-section">
          <div className="welcome-back">
            <h1 className="brand">STOCK<span className="highlight">PULSE</span></h1>
            <h2>Welcome Back 👋</h2>
            <p>
              Sign in to stay informed about the latest developments with your stocks. Track real-time updates and gain insights into the current status of your investments effortlessly.
            </p>
            <Form>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com" />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="At least 8 characters" />
                <Form.Text className="text-muted">
                  <p >Forgot Password?</p>
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="button" className="signin-btn" onClick={() => navigate('/dashboard')}>
                Sign in
              </Button>

              <div className="divider">Or</div>

              <Button variant="light" className="google-signin-btn">
                <FaGoogle className="google-icon" /> Sign in with Google
              </Button>

              <div className="signup-link">
                Don’t have an account? <Button variant="link" onClick={() => navigate('/register')}>Sign Up</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;