import { 
    Col, 
    Form, 
    NavDropdown, 
    Row,
    Button } from "react-bootstrap";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function Documents() {
    return (
        <div>
            <h3>Certificados</h3>
            <NavDropdown.Divider />
            <div className="document">
            <Form>
                <Row>
                    <Col xs={10}>
                        <Form.Label>Certificado de Alumno</Form.Label>
                    </Col>
                    <Col>
                        <Button variant="outline-secondary"><BsFillArrowDownCircleFill/> </Button>
                    </Col>
                </Row>
            </Form>
            </div>
        </div>
    )
}