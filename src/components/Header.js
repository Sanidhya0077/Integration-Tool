import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoUrl from "../images/LTIMindtree_logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container } from "react-bootstrap";
import Functionality from "./Functionality";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header id="header">
      <Container>
        <Row>
          <Col>
            {" "}
            <div className="logo">
              <img
                src={logoUrl}
                alt="Logo"
                style={{ height: "30px", marginTop: "2%" }}
              />
            </div>
          </Col>
          <Col>
            <div
              className="title"
              style={{ textAlign: "center", marginTop: "2%" }}
            >
              <b>Integration Assistant</b>
            </div>
          </Col>
          <Col>
            <div style={{ float: "right" }}>
              <a href="">Sign In/Register</a>

              <i
                class="bi bi-person-circle"
                style={{ "font-size": "2rem", color: "#fff" }}
              ></i>
            </div>
          </Col>
        </Row>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                B2B Partner Onboarding
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Migration</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Testing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Failover System Control
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Data Operation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                CPI Artifact Operation
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Partner Directory Operation
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Dashboard" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#action/4.2"
                onClick={() => navigate("/functionality")}
              >
                Explore all Products
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action/4.2"
                onClick={() => navigate("/subscriptions")}
              >
                Manage Subscriptions
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
