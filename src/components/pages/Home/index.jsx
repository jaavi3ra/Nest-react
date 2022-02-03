import { Badge, NavDropdown, Row, Tab, Tabs } from 'react-bootstrap';
import Subject from '../../common/subject';
import useIDSection from './hook/useIDSection';
import useIDSubjet from './hook/useIDCareer';

export default function Home() {
  const section = useIDSection()
  const career = useIDSubjet(section?._id)

  return (
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="home" title="Ramos Inscritos">
        <div className='subject'>
          <Badge bg="success">Sección:</Badge> 
          <Badge bg="info">{section?.section_name}</Badge> 
         
          <Row xs={1} md={2} className="g-5">
            {career?.subjects?.map(item => (
              <Subject key={item._id} subj={item} />
            ))}
          </Row>
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>       
      </Tab>
    </Tabs>
  )
}