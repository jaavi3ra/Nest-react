import { 
    Col, 
    Form, 
    Row } from "react-bootstrap";

export default function Teacher({ teacher }){
   
    return(
        <div>
            <h5>Docente</h5>
        <Row>
            <Col>
                <Form.Label>Rut</Form.Label>
                <Form.Control placeholder={teacher?.rut} plaintext readOnly />
            </Col>
            <Col>
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder={teacher?.firstname + ' '+ teacher?.lastname} plaintext readOnly />
            </Col>       
            <Col>
                <Form.Label>Email</Form.Label>
                <Form.Control placeholder={teacher?.email} plaintext readOnly />
            </Col>

        </Row> 
        </div>
       
    )
}