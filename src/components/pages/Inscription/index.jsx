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
import useSubjectByCareer from "./hook/useCareerBySection";
import useTeacherbyIdSubject from './hook/useTeacherbyIdSubject'
import useInscription from "./hook/useInscription";

export default function Inscription() {
    const { register, handleSubmit } = useInscription()

    const [showMe, setShowMe] = useState(false)
    const [avaibleSubject, setsubjectDis] = useState()
    const handleChangeAvaibleSubject = function (e) {
        const selected = e.target.value
        setsubjectDis(selected)
        setShowMe(true)
    }
    const [idsubj, setidsubj] = useState()
    const handleChangeSubject = function (e) {
        const selected = e.target.value
        setidsubj(selected)
    }

    const section = useSection()
    const career = useSubjectByCareer(section?._id)
    const subject = useSubjectById(idsubj)
    const teacher = useTeacherbyIdSubject(avaibleSubject)
    const schedule_subject = useSubjectById(avaibleSubject)

    const ShowResults = () => (
        <div id='showMe'>
            <Teacher teacher={teacher?.user} />
            <Schedule schedule={schedule_subject?.schedule} />
            <Button variant="primary" type="submit" >Asignar Ramo</Button>
        </div>
    )
    return (
        <div>
            <h4>Asignar Ramos</h4>
            <NavDropdown.Divider />
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col >
                        <FloatingLabel controlId="floatingSelect" label="Seccion">
                            <Form.Select aria-label="Floating label select example" {...register('id')}>
                            <option >Seleccionar Sección</option>
                                <option value={career?._id}>{section?.section_name}</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col >
                        <FloatingLabel controlId="floatingSelect" label="Seleccione Asignatura">
                            <Form.Select aria-label="Floating label select example"  onChange={handleChangeSubject}>
                                <option>Open this select</option>
                                {career?.subjects?.map(item => (
                                    <option key={item._id} value={item._id}>{item.namesubject}</option>
                                ))}

                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <Col >
                        <FloatingLabel controlId="floatingSelect" label="Asignaturas disponibles">
                            <Form.Select aria-label="Floating label select example" {...register('subjects')} onChange={handleChangeAvaibleSubject} >
                                <option>Open this select</option>
                                {subject?.subject?.map(item => (
                                    <option key={item._id} value={item._id}>{item.namesubject}</option>
                                ))}


                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    <p />
                </Form.Group>
                {showMe ? <ShowResults /> : null}
            </Form>
        </div>
    )

}