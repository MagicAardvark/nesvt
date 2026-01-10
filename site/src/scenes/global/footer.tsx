import { Container, Row, Col } from "react-bootstrap";
import { defaultMembership } from "../../data/events";

function Footer() {
  const currentYear = new Date().getFullYear();
  const msrLink = defaultMembership().detailuri;

  return (
    <footer className="main-footer">
      <Container>
        <Row>
          <Col md={4} className="footer-section">
            <h5 className="footer-title">NE-SVT</h5>
            <p className="footer-text">
              New England SVT Autocross Club - Bringing autocross enthusiasts together since 1998.
            </p>
          </Col>
          
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="./">Home</a></li>
              <li><a href="./#/events">Events</a></li>
              <li><a href="./#/gallery">Gallery</a></li>
              <li><a href="./#/faq">FAQ</a></li>
              <li><a href="./#/results">Live Timing</a></li>
            </ul>
          </Col>
          
          <Col md={4} className="footer-section">
            <h5 className="footer-title">Contact</h5>
            <ul className="footer-links">
              <li>
                <a href={msrLink}>Contact Us</a>
              </li>
              <li>
                <a href="https://motorsportreg.com" className="msr-link-footer">
                  <img
                    src="https://msr-hotlink.s3.amazonaws.com/powered-by/powered-by-msr-outline@2x.png"
                    alt="Online registration and event management service for motorsport events powered by MotorsportReg.com"
                    title="Online registration and event management service for motorsport events powered by MotorsportReg.com"
                    className="msr-img-footer"
                  />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        
        <Row>
          <Col className="footer-bottom">
            <p className="footer-copyright">
              &copy; {currentYear} NE-SVT. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
