
import {
    Col,
    Form,
    Row,
    Button,
    NavDropdown,
    FloatingLabel
} from "react-bootstrap";

export default function Support() {
    return (
        <div>
            <h3>
                Contacto
            </h3>
            <NavDropdown.Divider />
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control size="sm" type="email" placeholder="name@example.com" required />
                    <Form.Label>Email Destino</Form.Label>
                    <Row>
                        <Col>
                            <Form.Control size="sm" type="email" defaultValue="support@nest.cl" readOnly plaintext />
                        </Col>
                        <Col>
                            <Form.Control size="sm" type="email" placeholder="name@example.com"/>
                        </Col>

                    </Row>
                    <Form.Text className="text-muted">
                        *support@nest.cl es el correo de soporte hacia coordinadores.
                    </Form.Text><p />

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">Asunto:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Asunto" required />
                        </Col>
                    </Form.Group>

                </Form.Group>
                <>
                    <FloatingLabel controlId="floatingTextarea2" label="Comentario" required>
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </><p />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}