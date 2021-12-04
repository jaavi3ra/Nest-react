import { 
    Col, 
    Form 
} from "react-bootstrap";

export default function Password() {
    return (
        <Form.Group  controlId="formPlaintextEmail">
            <Form.Label column sm="4">Contraseña Nueva:</Form.Label>
            <Col sm="10">
                <Form.Control sm="2" type="password" placeholder="Password" required />
            </Col>
            <Form.Label column sm="4">Contraseña Nueva:</Form.Label>
            <Col sm="10">
                <Form.Control type="password" placeholder="Password" required />
                <Form.Text className="text-muted">
                    Ingrese nuevamente la contraseña nueva.
                </Form.Text><p />
            </Col>

        </Form.Group>
    )

}