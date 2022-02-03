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
import useUserByid from '../../pages/Profile/hook/useUserByid';

export default function Navigation() {
  const { logout } = useAuth()
  const user = useUserByid()
  return (
    <div>

      <div>
        <Image src={background} fluid />
      </div>
      <Navbar className="navcolor1" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Portal Nest</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/profile" >Perfil</Nav.Link>
            <NavDropdown title="Solicitudes" id="collasible-nav-dropdown" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/assign"> + Asignacion de Ramos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> + Asignar Sección</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/documents"> + Generar Certificados </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
        <Navbar.Collapse className="justify-content-center">
          <Nav className='justify-content-center'>
            <Nav.Link href="#">Bienvenido <a href="#user">{user?.firstname + ' ' + user?.lastname}</a></Nav.Link>
            <Nav.Link as={Link} to="/login" onClick={logout}> Cerrar Sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
