import { Card, NavDropdown } from "react-bootstrap";

export default function Support() {
    return (
        <Card style={{ width: '15rem' }}>
            <Card.Body>
                <Card.Title>Asistencia</Card.Title>
                <NavDropdown.Divider />
                <Card.Subtitle className="text-muted">Contacto</Card.Subtitle>
                <Card.Link href="#">Card Link</Card.Link> <p/>

                <Card.Subtitle className="text-muted">Sobre Inscripciones</Card.Subtitle>
                <Card.Link href="#">Another Link</Card.Link><p/>

                <Card.Subtitle className="text-muted">Contraseña</Card.Subtitle>
                <Card.Link href="#">ForgotPassword?</Card.Link><p/>
            </Card.Body>
        </Card>
    )
}