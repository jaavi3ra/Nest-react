import { Button, Form } from 'react-bootstrap';

export default function Login() {
    return (

        <div className='login'>
            <div>
                <h1> Bienvenido a NEST</h1>
                <p /><h3> Portal de alumnos en linea</h3>
            </div>

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>RUT</Form.Label>
                    <Form.Control type="email" placeholder="Enter RUT" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                     <Form.Text className="text-muted">
                       <Button variant="link">ForgotPassword?</Button>
                    </Form.Text><p/>
                </Form.Group>
               

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
