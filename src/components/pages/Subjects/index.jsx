import {
    Form,
    NavDropdown,
} from "react-bootstrap";
import Schedule from "../../common/Schedule";
import Teacher from "../../common/teacher";
import Session from "../../common/Session";
import Evaluation from "../../common/Evaluation";
import useEvaluationBySubj from "./hook/useEvaluationBySubject";
import useSubjectByIdParams from "./hook/useSubjectById";
import useSession from "./hook/useSession";

export default function SubjectInfo() {
    const subject = useSubjectByIdParams()
    const evaluation = useEvaluationBySubj()
    const session = useSession() 
    console.log(session)
   
    return (
        <Form>
            <h4>{subject?.namesubject}</h4>
            <NavDropdown.Divider />
            <Teacher teacher={subject?.teacher?.user} />
            <NavDropdown.Divider />
            <h4>Sesiones</h4>
            <Session session={session} />
            <NavDropdown.Divider />
            <h4>Evaluaciones</h4>
            <Evaluation eva={evaluation} />
            <NavDropdown.Divider />  
            <Schedule schedule={subject?.schedule} />             
        </Form>
    )

}