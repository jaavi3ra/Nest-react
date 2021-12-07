import { useEffect, useState } from "react";
import { Col, Form, NavDropdown, Row } from "react-bootstrap";
import useSectionService from "../../../hooks/useSectionService";
import useUserService from "../../../hooks/useUserService";
import Home from "../Home";

export default function Perfil() {
    const { getUserById } = useUserService()
    const { getSection } = useSectionService()
    
    const [user, setUser] = useState()
    useEffect(() => {
        getUserById()
            .then(setUser)
            .catch(console.error)
    }, [getUserById])
    
    const [section, setSection] = useState()
    useEffect(() => {
      getSection()
          .then(setSection)
          .catch(console.error)
    }, [ getSection ])
    return (
        <div>
            <h4>Perfil</h4>
            <Form>
                <NavDropdown.Divider />
                <Row>
                    <Col>
                        <Form.Label>Rut</Form.Label>
                        <Form.Control placeholder={user?.rut} readOnly/>
                    </Col>
                    <Col>
                        <Form.Label>Seccion</Form.Label>
                        <Form.Control placeholder={section?.section_name} readOnly/>
                    </Col>
                    <Col>
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder={user?.email} readOnly/>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control placeholder={user?.firstname + " " + user?.lastname} readOnly/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>ID Matricula</Form.Label>
                        <Form.Control placeholder={user?.firstname + " " + user?.lastname} readOnly/>
                    </Col>
                    <Col>
                        <Form.Label>Date</Form.Label>
                        <Form.Control placeholder="{Enrolled}" readOnly/>
                    </Col>
                </Row>
                <NavDropdown.Divider />
            </Form>
            <Home />
        </div>

    )
}