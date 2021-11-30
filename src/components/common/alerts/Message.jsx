import { Alert } from "react-bootstrap"


const getMessage = () =>{
    const success = ctx =>{
        [
            'success'
          ].map((variant, idx) => (
            <Alert key={idx} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          ));
    }
    return{success}
}
export default getMessage