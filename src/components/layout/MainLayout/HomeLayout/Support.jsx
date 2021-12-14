import {
    Card,
    NavDropdown
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function SupportLayout() {
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Body>
                <Card.Title>Asistencia</Card.Title>
                <NavDropdown.Divider />
                <Card.Subtitle className="text-muted">Contacto</Card.Subtitle>
                <Card.Link as={Link} to={"/support"}>Haz contacto con un coordinador con tu correo institucional.</Card.Link> <p />

                <Card.Subtitle className="text-muted">Sobre Inscripciones y Certificados</Card.Subtitle>
                <Card.Link href="#">Revisar.</Card.Link><p />

                <Card.Subtitle className="text-muted">Contraseña</Card.Subtitle>
                <Card.Link as={Link} to={"/ChangePassword"}>Cambio de Contraseña.</Card.Link><p />
            </Card.Body>
        </Card>
    )
}