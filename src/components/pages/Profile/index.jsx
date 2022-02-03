import {
    Col,
    Form,
    NavDropdown,
    Row,
    Tab,
    Tabs
} from "react-bootstrap";
import Home from "../Home";
import useSection from "./hook/useSection";
import useUserByid from "./hook/useUserByid";
import useSubmission from "./hook/useSubmission";


export default function Perfil() {
    const user = useUserByid()
    const section = useSection()
    const submision = useSubmission()

    return (
        <div>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="profile" title="Perfil">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Label>Rut</Form.Label>
                                <Form.Control placeholder={user?.rut} plaintext readOnly />
                            </Col>
                            <Col>
                                <Form.Label>Sección</Form.Label>
                                <Form.Control placeholder={section?.section_name} plaintext readOnly />
                            </Col>
                            <Col>
                                <Form.Label>Email</Form.Label>
                                <Form.Control placeholder={user?.email} plaintext readOnly />
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control placeholder={user?.firstname + " " + user?.lastname} plaintext readOnly />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Label>Título</Form.Label>
                                <Form.Control className="mb-3" placeholder={submision?.title} plaintext readOnly />
                            </Col>
                            <Col>
                                <Form.Label>Grado</Form.Label>
                                <Form.Control className="mb-3" placeholder={submision?.grade} plaintext readOnly />
                            </Col>
                            <Col>
                                <Form.Label>Fecha Ingreso</Form.Label>
                                <Form.Control placeholder={submision?.student?.enrolled} plaintext readOnly />
                            </Col>
                        </Row>                      
                    </Form>
                </Tab>
                <Tab eventKey="subject" title="Asignaturas">
                    <Home />
                </Tab>
            </Tabs>
            
        </div>
    )
}