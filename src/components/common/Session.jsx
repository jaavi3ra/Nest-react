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
                    <th>Hora</th>             
                </tr>
            </thead>
            <tbody>
                    {session?.map((item,i) =>   
                <tr>
                    <td><Button variant="link">Enlace</Button></td>                 
                    <td value={i}>{item?.datetime?.date}</td>   
                    <td value={i}>{item?.datetime?.hour}</td>            
                </tr>          
                    )}
            </tbody>
        </Table>
      </div>
    )
}