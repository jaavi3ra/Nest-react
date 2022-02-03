import {
    Card,
    Col,
    Button,
    Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import mini from '../../Image/ardenweald.jpg'

export default function Subject({ subj }) {
    const teacher = subj?.teacher?.user

    return (
        <div>
            <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Img src={mini} />
                    <Card.Body>
                        <Card.Title defaultValue={subj._id}>
                            <Button as={Link} to={`/subject/${subj._id}`} type='submit' variant="link" >
                                {subj.namesubject}
                            </Button>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><Badge bg="secondary">Docente:</Badge> {teacher?.firstname + ' ' + teacher?.lastname}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted"><Badge bg="secondary">Correo:</Badge> {teacher?.email}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )

}