import { 
    Col, 
    Form, 
    NavDropdown, 
    Row } from "react-bootstrap";

export default function Inscriptions(){
  <Form>
  <h4>Perfil</h4>
  <NavDropdown.Divider />
  <Row>
      <Col>
          <Form.Label>Rut</Form.Label>
          <Form.Control placeholder="First name" />
      </Col>
      <Col>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Last name" />
      </Col>

  </Row>
  <Row>
      <Col>
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder="First name" />
      </Col>
      <Col>
          <Form.Label>ID Matricula</Form.Label>
          <Form.Control placeholder="ID" />
          <Form.Label>Date</Form.Label>
          <Form.Control placeholder="Enrolled" />
      </Col>           
  </Row>
  <NavDropdown.Divider />
</Form>
}