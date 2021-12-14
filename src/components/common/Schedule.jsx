import { NavDropdown, Table } from "react-bootstrap";

export default function Schedule({schedule}){
    return(
      <div>
           <NavDropdown.Divider />
            <h4>Horario</h4>
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Hora</th>                 
                    <th>Fecha</th>  
                    <th>Resumen</th>             
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{schedule?.hour}</td>               
                    <td>{schedule?.date}</td> 
                    <td>{schedule?.hour +' '+ schedule?.date}</td>       
                </tr>   
            </tbody>
        </Table>
      </div>
    )
}