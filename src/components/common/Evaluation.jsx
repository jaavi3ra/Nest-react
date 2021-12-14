import {  
    Table} from "react-bootstrap";

export default function Teacher({ eva }){
   
    return(
        <div>
        <Table bordered hover size="sm">
            <thead>
                <tr>
                    <th>Evaluación</th>
                    <th>Dia</th>
                    <th>Hora</th>              
                </tr>
            </thead>
            <tbody>
                {eva?.map(item =>(
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.deadline}</td>
                    <td>Otto</td>                 
                </tr>          
             ))}
            </tbody>
        </Table>
      </div>
       
    )
}