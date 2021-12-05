
import {
    Col,
    Form,
    Button,
    NavDropdown,
    FloatingLabel
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
            <>
                <FloatingLabel 
                controlId="floatingInput"
                label="Ingrese Rut"
                className="mb-3" >
                    <Form.Control type="text" placeholder="11222333-8" required />
                </FloatingLabel>
            </>
                <Password />
                <div className="d-grid gap-2">
                <Button  variant="primary" type="submit">Cambiar</Button>
                </div>
            </Form>
        </div>

    )

}