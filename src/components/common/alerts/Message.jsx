import { Alert } from "react-bootstrap"


const getMessage = () => {
  const success = ctx => {
    <Alert variant="success">
      This is a success alert—check it out!
    </Alert>
  }
  const warning = ctx =>{
    <Alert variant="warning">
    This is a success alert—check it out!
  </Alert>
  }
  const danger = ctx =>{
    <Alert variant="danger">
    This is a success alert—check it out!
  </Alert>
  }
  return { 
    success,
    warning,
    danger
   }
}
export default getMessage