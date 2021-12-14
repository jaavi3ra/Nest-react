
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
                    <Form.Control size="sm" type="email" placeholder="name@example.com" />
                    <Form.Label>Email Destino</Form.Label>
                    <Form.Control size="sm" type="email" placeholder="name@example.com" defaultValue="support@nest.cl" />
                    <Form.Text className="text-muted">
                        Opcional.
                    </Form.Text><p />

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">Asunto:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Asunto" />
                        </Col>
                    </Form.Group>

                </Form.Group>
                <>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </><p/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}