import {
    Col,
    FloatingLabel,
    Form
} from "react-bootstrap";

export default function Password() {
    return (
        <>
            <FloatingLabel controlId="floatingPassword" label="Contraseña Nueva" >
                <Form.Control type="password" placeholder="Password" required />
            </FloatingLabel ><p/>
            <FloatingLabel controlId="floatingPassword" label="Contraseña Nueva" >
                <Form.Control type="password" placeholder="Password" required />
                <Form.Text className="text-muted">
                    Ingrese nuevamente la contraseña nueva.
                </Form.Text><p />
            </FloatingLabel >
        </>

    )

}