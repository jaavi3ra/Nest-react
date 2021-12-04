import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Row
} from 'react-bootstrap';
import Support from './Support';


export default function HomeLayout({children}) {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)
  return (
    <div className="home">
      <Container fluid className="containerMain">
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
               {/* <Profile user={{firstName: "fernanda"}}/>*/}
               <Container>
                 {children}
               </Container>
             
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