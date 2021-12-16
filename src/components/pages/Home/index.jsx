import { Form, NavDropdown, Row } from 'react-bootstrap';
import Subject from '../../common/subject';
import useIDSection from './hook/useIDSection';
import useIDSubjet from './hook/useIDSubject';

export default function Home() {
  const section = useIDSection()
  const subject = useIDSubjet(section?._id)

  return (
    <div>
      <h4>Ramos Inscritos</h4>
      <Form.Label sm="2"  >
        Seccion: {section?.section_name}
      </Form.Label>
      <NavDropdown.Divider />
      <Row xs={1} md={2} className="g-5">
        {subject?.map(item => (
          <Subject key={item._id} subj={item} />
        ))}
      </Row>
      <NavDropdown.Divider />

    </div>


  )

}