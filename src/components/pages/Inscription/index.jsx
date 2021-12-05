import {
    Col,
    FloatingLabel,
    Form,
    NavDropdown,
    Row,
    Button
} from "react-bootstrap";
import Schedule from "../../common/Schedule";
import Teacher from "../../common/teacher";


export default function Inscription() {
    return (
        <Form>

            <h4>Asignar Ramos disponibles</h4>
            <NavDropdown.Divider />           
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                    Seccion:
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="email@example.com" />

                </Col>
                <Col >
                    <FloatingLabel controlId="floatingSelect" label="Asignaturas Disponibles">
                        <Form.Select aria-label="Floating label select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>

            </Form.Group>
            <p />
            <NavDropdown.Divider />

            <div>
                <Teacher user={"a"} />
                 <NavDropdown.Divider />
                <Schedule />
                <Button variant="primary" type="submit">Asignar Ramo</Button>
            </div>

        </Form>

    )



}