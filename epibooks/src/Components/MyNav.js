import { Container, Nav, Navbar, NavDropdown, Row, Form } from 'react-bootstrap';


function MyNav({Brand, searchBook, onchange}) {

  return (
    <Navbar expand="lg" className="bg-body-tertiary position-sticky top-0 z-3">
      <Container>
        <Navbar.Brand href="#">{Brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

   {/* // The search bar that allows the user to search for a book and update its value. */}
        <Row className='container d-flex justify-content-center align-items-center m-auto'>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search for a book"
                value={searchBook}
                onChange={onchange} />
            </Form.Group>
          </Form>
        </Row>

      </Container>
    </Navbar>
  );
}

export default MyNav;
