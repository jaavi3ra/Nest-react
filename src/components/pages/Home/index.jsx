import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import useSubjectService from '../../../hooks/useSubjectService';
import useSectionService from '../../../hooks/useSectionService';
import Subject from '../../common/subject';

export default function Home() {
  const [subject, setSubject] = useState()
  const [section, setSection] = useState()
  const { getAll } = useSubjectService()
  const { getSection } = useSectionService()

  useEffect(() => {
    getAll()
        .then(setSubject)
        .catch(console.error)
  }, [getAll])

  useEffect(() => {
    getSection()
        .then(setSection)
        .catch(console.error)
  }, [ getSection ])

  return (
    <div>
      <h4>Ramos Inscritos</h4>
        <Form.Label sm="2"  >
          Seccion: {section?.section_name}
        </Form.Label>

      {subject?.map(item => (
        <Subject key={item._id} subj={item} />
      ))}

    </div>


  )

}