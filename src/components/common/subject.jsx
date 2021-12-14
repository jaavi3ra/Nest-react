import {
    Card,
    Col,
    Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import mini from '../../Image/ardenweald.jpg'

export default function Subject({ subj }) {
   const teacher = subj?.teacher?.user
    return (
        <div>   
                    <Col>
                        <Card style={{ width: '23rem' }}>
                            <Card.Img src={mini} />
                            <Card.Body>
                                <Card.Title defaultValue={subj._id}> 
                                <Button as={Link} to={`/subject/${subj._id}`} type='submit' variant="link" >      
                                 {subj.namesubject}
                                </Button>
                                </Card.Title>
                                <Card.Text>                            
                               
                                This is a longer card with supporting text below as a natural
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Docente: {teacher?.firstname + ' ' + teacher?.lastname}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Correo: {teacher?.email}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>    
        </div>
    )

}