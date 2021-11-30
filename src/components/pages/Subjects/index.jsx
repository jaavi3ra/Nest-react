import {
    Col,
    Form,
    NavDropdown,
    Row
} from "react-bootstrap";
import Teacher from "../../common/teacher";

export default function SubjectInfo() {
    const subject = "nombre asignatura"
    return (
        <Form>
            <h4>{subject}</h4>
            <NavDropdown.Divider />
            <Teacher />
          
            <NavDropdown.Divider />
            <h4>Evaluations</h4>
            <Row>
                <Col>
                    <Form.Label>Evaluacion: </Form.Label>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Label>Fecha: </Form.Label>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Row>
            <NavDropdown.Divider />
            <h4>Session</h4>
            <Row>
                <Col>
                    <Form.Label>Fecha: </Form.Label>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Row>
        </Form>
    )

}