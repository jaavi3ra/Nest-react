import {
    Button,
    FloatingLabel,
    Form
} from 'react-bootstrap';
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
                        <Form.Control type="text"  {...register('rut')} required/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password"  {...register('password')} required />
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
