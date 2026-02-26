import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>MyEvents</Navbar.Brand>
        <Nav className="me-auto">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active-link" : "nav-link"
            }
          >
            Events
          </NavLink>
          <NavLink to="/add" className="nav-link">
  Add New Event
</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;