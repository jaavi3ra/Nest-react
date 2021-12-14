import { Button, NavDropdown, Table } from "react-bootstrap";

export default function Session({session}){
    return(
      <div>
           <NavDropdown.Divider />
        <Table  bordered hover size="sm">
            <thead>
                <tr>
                    <th>...</th>
                    <th>Fecha</th>              
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><Button variant="link">Enlace</Button></td>                 
                    <td>{session?.datetime}</td>              
                </tr>          
            </tbody>
        </Table>
      </div>
    )
}