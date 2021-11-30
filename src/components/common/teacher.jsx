import { 
    Col, 
    Form, 
    Row } from "react-bootstrap";

export default function Teacher(user){
    return(
        <div>
            <h5>Docente</h5>
        <Row>
            <Col>
                <Form.Label>Rut</Form.Label>
                <Form.Control placeholder={user.rut} />
            </Col>
            <Col>
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder={user.nombre} />
            </Col>       
            <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder={user.email} />
            </Col>

        </Row> 
        </div>
       
    )
}