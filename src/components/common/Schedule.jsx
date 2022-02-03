import { Table } from "react-bootstrap";

export default function Schedule({schedule}){
    
    return(
      <div>
            <h4>Horario</h4>
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Hora</th>                 
                    <th>Día</th>
                    <th>Fecha</th>                                 
                </tr>
            </thead>
            <tbody>
           {schedule?.map(item => (
                 <tr>
                    <td>{item?.hour}</td>               
                    <td>{item?.day}</td> 
                    <td>{item?.date}</td> 
                </tr> 
           ))}
                 
                
            </tbody>
        </Table>
      </div>
    )
}