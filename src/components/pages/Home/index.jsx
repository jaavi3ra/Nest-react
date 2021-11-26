import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Row
} from 'react-bootstrap';
import Subject from '../Subjects';
import Support from '../Support';




export default function Home() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)
  return (
    <div className="home">
    <Container fluid>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <div>
            <Button variant="primary" onClick={handleClick}>
              Count: {count}
            </Button>
          </div>
        </Col>

        <Col>
          <div>
            <Subject />
          </div>
        </Col>

        <Col>
          <div>
           <Support />
          </div>
        </Col>

      </Row>
    </Container>

    </div>



  )

}
