import {
    Button,
    FloatingLabel,
    Form
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useLogin from './hook/useLogin';

export default function Login() {
    const { register, handleSubmit } = useLogin()
    return (
        <div className="loginForm">
            <h5>Ingresar al portal</h5>
            <>
                <Form onSubmit={handleSubmit}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Ingrese Rut"
                        className="mb-3"
                    >
                        <Form.Control type="text" {...register('rut')} required />
                        <Form.Text className="text-muted">
                            *Debe ingresar el rut sin puntos y con guión.*
                        </Form.Text>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password"  {...register('password')} required />
                        <Button variant="link" as={Link} to="/NewPassword">¿Problemas con la contraseña?</Button>

                    </FloatingLabel>
                    <p />
                    <div className="d-grid gap-2">
                        <Button variant="outline-primary" type="submit" >
                            Ingresar
                        </Button>
                    </div>
                </Form>
            </>
        </div>


    )
}
