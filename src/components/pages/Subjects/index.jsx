import { Card, Col, Row } from "react-bootstrap";

export default function Subject() {
    return (
        <Row >
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body>
                            <Card.Title>Subject title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                            </Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Docente Subtitle</Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">Email Subtitle</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )

}