import {
    Form,
    Button,
    NavDropdown,
    FloatingLabel
} from "react-bootstrap";
import { Link } from "react-router-dom";
import usePass from "./hook/usePassword"


export default function ChangePassword() {
    const { register, handleSubmit } = usePass()
    return (
        <div className="changePassword">
            <h4>
                Cambio de Contraseña
            </h4>
            <NavDropdown.Divider />
            <Form onSubmit={handleSubmit}>
                <>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Ingrese Rut"
                        className="mb-3" >
                        <Form.Control type="text" placeholder="11222333-8" required {...register('rut')} maxLength={13}/>
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Contraseña Nueva" >
                        <Form.Control type="password" placeholder="Password" required  {...register('password')} minLength={6} />
                    </FloatingLabel ><p />

                    <FloatingLabel controlId="floatingPassword" label="Contraseña Nueva" >
                        <Form.Control type="password" placeholder="Password" required minLength={6}/>
                        <Form.Text className="text-muted">
                            Confirma tu contraseña nueva.
                        </Form.Text><p />
                    </FloatingLabel >
                </>

                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">Cambiar</Button>
                    <Button variant="outline-secondary" as={Link} to='/login'>Volver</Button>
                </div>
            </Form>
        </div>

    )

}