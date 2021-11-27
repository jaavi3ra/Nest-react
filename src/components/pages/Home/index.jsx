import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Row
} from 'react-bootstrap';
import Profile from '../../common/profile';
import Perfil from '../Perfil';
import Subject from '../Subjects';
import Support from '../Support';




export default function Home() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)
  return (
    <div className="home">
      <Container fluid>
        <Row >
          <Col sm>
            <div>
              <Button variant="primary" onClick={handleClick}>
                Count: {count}
              </Button>
            </div>
          </Col>

          <Col sm={8}>
            <div>
                <Profile user={{firstName: "fernanda"}}/>
                <Subject />
             
            </div>
          </Col>

          <Col sm>
            <div>
              <Support />
            </div>
          </Col>

        </Row>
      </Container>

    </div>



  )

}
