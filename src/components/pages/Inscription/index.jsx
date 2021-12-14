import { useState } from "react"
import {
    Col,
    FloatingLabel,
    Form,
    NavDropdown,
    Row,
    Button
} from "react-bootstrap";
import Schedule from "../../common/Schedule";
import Teacher from "../../common/teacher";
import useSubjectById from "../Inscription/hook/useSubjectById";
import useSection from "./hook/useSection";
import useSubjectBySection from "./hook/useSubjectBySection";
import useTeacherbyIdSubject from './hook/useTeacherbyIdSubject'

export default function Inscription() {

    const [idsect, setidsect] = useState()
    const handleChangeSection = function (e) {
        const selected = e.target.value
        setidsect(selected)
    }
    const [idsubj, setidsubj] = useState()
    const handleChangeSubject = function (e) {
        const selected = e.target.value
        setidsubj(selected)
    }

    const section = useSection()
    const idSubjects = useSubjectBySection(idsect)
    const teacher = useTeacherbyIdSubject(idsubj)
    const subject = useSubjectById(idsubj)
    console.log(subject)
    
    return (
        <div>
            <h4>Asignar Ramos</h4>
            <NavDropdown.Divider />
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col >
                    <FloatingLabel controlId="floatingSelect" label="Secciones">
                        <Form.Select aria-label="Floating label select example" onChange={handleChangeSection}>
                            <option>Open this select</option>
                            {section?.map(item => (
                                <option key={item._id} value={item._id}>{item.section_name}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col >
                    <FloatingLabel controlId="floatingSelect" label="Asignaturas Disponibles">
                        <Form.Select aria-label="Floating label select example" onChange={handleChangeSubject}>
                            <option>Open this select</option>
                            {idSubjects?.map(item => (
                                <option key={item._id} value={item._id}>{item.namesubject}</option>
                            ))}

                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Form.Group>
            <p />
            <NavDropdown.Divider />
            <div>
                <Teacher teacher={teacher?.user} />
                <NavDropdown.Divider />
                <Schedule schedule={subject}/>
                <Button variant="primary" type="submit">Asignar Ramo</Button>
            </div>
        </div>
    )
}