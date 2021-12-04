import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useLogin from './hook/useLogin';

export default function Login() {
    const { register, handleSubmit} = useLogin()
    return (
        
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>RUT</Form.Label>
                    <Form.Control type="text" placeholder="Enter RUT" {...register('rut')} required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register('password')} required/>
                    <Form.Text className="text-muted">
                        <Button as={Link} to={"/NewPassword"} variant="link">Forgot Password?</Button>
                    </Form.Text><p />
                </Form.Group>


                <Button variant="primary" type="submit" >
                    Ingresar
                </Button>
            </Form>
       

    )
}
