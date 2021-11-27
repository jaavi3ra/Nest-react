import { Col, Form, NavDropdown, Row } from "react-bootstrap";

export default function Profile({ user }) {

    return (

        <div>
            <p>
                {user.firstname}
            </p>
            <Form>
                <NavDropdown.Divider />
                <Row>
                    <Col>
                        <Form.Label>Rut</Form.Label>
                        <Form.Control placeholder={user.rut}/>
                    </Col>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder={user.email} />
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder= {user.firstname +" "+ user.lastname} />
                    </Col>
                    <Col>
                        <Form.Label>ID Matricula</Form.Label>
                        <Form.Control placeholder="{ID}" />
                        <Form.Label>Date</Form.Label>
                        <Form.Control placeholder="{Enrolled}" />
                    </Col>
                </Row>
                <NavDropdown.Divider />
            </Form>
        </div>
    )
}