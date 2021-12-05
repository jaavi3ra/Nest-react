import {
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import background from '../../../Image/ana.jpg'
import { useAuth } from '../../context/AuthContext';

export default function Navigation() {
  const { logout } = useAuth()
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
            placement="end" 
            bg="dark" 
            expand="lg">
            <Offcanvas.Header closeButton className="navcolor2">
              <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
            </Offcanvas.Header>
            <NavDropdown.Divider />

            <Offcanvas.Body className="">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">Perfil</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login">Malla</NavDropdown.Item>
                <NavDropdown title="Solicitudes" id="offcanvasNavbarDropdown" variant="info">
                  <NavDropdown.Item as={Link} to="/assign"> + Asignacion de Ramos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/assign"> + Asignacion de Ramos</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/document">
                    + Generar Certificados
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/login" onClick={logout}> LogOut</NavDropdown.Item>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  )
}
