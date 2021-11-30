import {
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import background from '../../common/Image/ana.jpg'

export default function Navigation() {
  return (
    <div>
      <div>
        <Image src={background} fluid />
      </div>   
      <Navbar className="navcolor1" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Portal Nest</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end">


            <Offcanvas.Header closeButton className="">
              <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <NavDropdown.Divider />
            <Offcanvas.Body className="">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/profile">Perfil</Nav.Link>
                <Nav.Link as={Link} to="/login">Malla</Nav.Link>
                <NavDropdown title="Solicitudes" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item as={Link} to="/assign"> + Asignacion de Ramos</NavDropdown.Item>
                  <NavDropdown.Item href="#action4"> + Cambio de Sección</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Documentos
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <Nav.Link as={Link} to="/login">Out Login</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
