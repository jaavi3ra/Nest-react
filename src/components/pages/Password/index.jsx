
import {
    Col,
    Form,
    Button,
    NavDropdown
} from "react-bootstrap";
import Password from "../../common/password";

export default function ChangePassword() {
    return (
        <div className="changePassword">
            <h3>
                Cambio de Contraseña
            </h3>
            <NavDropdown.Divider />
            <Form>
                <Form.Label column sm="2">Ingrese Rut </Form.Label>
                <Col sm="10">
                    <Form.Control type="text" placeholder="Rut" required />
                </Col>
                <Password />
                <Button variant="primary" type="submit">Cambiar</Button>
            </Form>
        </div>

    )

}