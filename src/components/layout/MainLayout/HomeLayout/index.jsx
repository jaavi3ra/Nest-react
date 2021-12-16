import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import Support from './Support';


export default function HomeLayout({children}) {
 // const [count, setCount] = useState(0)
 // const handleClick = () => setCount(count + 1)
  return (
    <div className="home">
      <Container fluid className="containerMain">
        <Row >
          <Col sm>
            <div>
            
            </div>
          </Col>

          <Col sm={8}>
            <div>
               <Container>
                 {children}
               </Container>
             
            </div>
          </Col>

          <Col >
            <div>
              <Support />
            </div>
          </Col>

        </Row>
      </Container>

    </div>



  )

}