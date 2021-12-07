import { 
    Col, 
    Form, 
    NavDropdown, 
    Row } from "react-bootstrap";

export default function Profile({ user }) {

    return (
        <div>
             <h4>profile</h4>
            <Form>
                <NavDropdown.Divider />
                <Row>
                    <Col>
                        <Form.Label>Rut</Form.Label>
                        <Form.Control placeholder={user} />
                    </Col>
                    <Col>
                        <Form.Label>Seccion</Form.Label>
                        <Form.Control placeholder={user} />
                    </Col>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder={user} />
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder={user?.firstname + " " + user.lastname} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>ID Matricula</Form.Label>
                        <Form.Control placeholder={user?.firstname + " " + user.lastname} />
                    </Col>
                    <Col>
                        <Form.Label>Date</Form.Label>
                        <Form.Control placeholder="{Enrolled}" />
                    </Col>
                </Row>
                <NavDropdown.Divider />
            </Form>
        </div>


    )
}