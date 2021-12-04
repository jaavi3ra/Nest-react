import {
    Card,
    Col,
    NavDropdown,
    Row,
    Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import mini from '../../Image/ardenweald.jpg'

export default function Subject({ subj }) {
    return (
        <div>
            <h4>Ramos Inscritos</h4>
            <Row >
                <NavDropdown.Divider />
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img src={mini} roundedCircle />
                            <Card.Body>
                                <Card.Title> <Button as={Link} to="/subject" variant="link">{subj.namesubject}</Button> </Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                </Card.Text>
                                <Card.Subtitle className="mb-2 text-muted">Docente Subtitle</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Email Subtitle</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <NavDropdown.Divider />
            </Row>
        </div>
    )

}