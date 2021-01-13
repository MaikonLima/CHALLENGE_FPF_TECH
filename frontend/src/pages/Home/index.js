import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { FaPen, FaTrash } from 'react-icons/fa';
import './styles.css';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { Card, Button, Modal, Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap';
import api from "../../services/api";




export default function Home() {

    // const id_project = localStorage.getItem('id_project');
    const [show, setShow] = useState(false);


    const [project, setProject] = useState([]);
    // const history = useHistory();


    useEffect(() => {
        api.get("project")
            .then((response) => {
                setProject(response.data);
            });
    });

    async function handleDeleteProject(id_project) {

        await api.delete(`/project/delete/${id_project}`);
    }
    async function handleValueInvestiment() {
        
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <header>Gestão de Projetos</header>
            <div className="container-custom">
                <Button style={{ backgroundColor: '#262151' }} href="/new">Novo Projeto</Button>
                &nbsp;
                {/* <Link>
                    <Button style={{ backgroundColor: '#262151' }} href="#">Simular Investimento</Button>
                </Link> */}
                <div className="py-5">
                    <div className="row d-flex">

                        {project.map((item) =>
                            <div className="col-lg-4 mb-5" key={item.id_project}>
                                <Card style={{ width: '22rem' }}>
                                    <Card.Body>
                                        <strong>Nome do Projeto</strong>
                                        <p>{item.name_project}</p>

                                        <strong>Participantes</strong>
                                        <Card.Text>
                                            {item.name_participant}
                                        </Card.Text>

                                        <Row>
                                            <Col>
                                                <Button variant="primary" onClick={handleShow}>
                                                    Simular<br></br>Investimento
                                                </Button>

                                                <Modal
                                                    show={show}
                                                    onHide={handleClose}
                                                    backdrop="static"
                                                    keyboard={false}
                                                >
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Simular Investimento</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <Form>
                                                            <Row>
                                                                <Col>
                                                                    <Form>
                                                                        <Form.Group as={Row}>
                                                                            <Form.Label column sm="8">
                                                                                Valor do Projeto
                                                                            </Form.Label>
                                                                            <Col sm="10">
                                                                                <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.value)}</p>
                                                                            </Col>
                                                                        </Form.Group>
                                                                    </Form>
                                                                </Col>
                                                                <Col>
                                                                    <Form>
                                                                        <Form.Group as={Row}>
                                                                            <Form.Label column sm="8">
                                                                                Risco do Projeto
                                                                            </Form.Label>
                                                                            <Col sm="10">
                                                                                {item.risk}
                                                                            </Col>
                                                                        </Form.Group>
                                                                    </Form>

                                                                </Col>
                                                            </Row>
                                                            <InputGroup className="mb-3">
                                                                <FormControl
                                                                    placeholder="valor do investimento"
                                                                    aria-label="Amount (to the nearest dollar)"
                                                                />
                                                            </InputGroup>
                                                        </Form>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Fechar
                                                        </Button>
                                                        <Button onClick={handleValueInvestiment} variant="primary">Calcular Investimento</Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Col>
                                            <Col>
                                                <Card.Text>
                                                    <strong>Valor do Projeto</strong>
                                                    <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.value)}</p>
                                                </Card.Text>
                                            </Col>
                                            <Col>
                                                <Card.Text>
                                                    <strong>Risco</strong>
                                                    <p>{item.risk}</p>
                                                </Card.Text>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col>
                                                <Link to={`/editar/${item.id_project}`}>
                                                    <Button variant="warning">
                                                        <FaPen size={20} color="#eeeeee" />&nbsp;Editar</Button>
                                                </Link>
                                            </Col>
                                            <Col>

                                                <Button onClick={() => {
                                                    Swal.fire({
                                                        title: "Deletar projeto?",
                                                        text: "",
                                                        icon: "warning",
                                                        buttons: true,
                                                        dangerMode: true,
                                                        confirmButtonText: `Deletar`,
                                                    }).then((result) => {
                                                        if (result) {
                                                            Swal.fire("Projeto Excluído!", '', 'success', {
                                                                icon: "sucess",
                                                            });
                                                            handleDeleteProject(item.id_project);
                                                        }
                                                    })
                                                }}
                                                    variant="dark"><FaTrash
                                                        size={20}
                                                        color="#eeeeee" />&nbsp;Excluir</Button>
                                            </Col>
                                            {/* <Col>
                                                <Button variant="primary" onClick={handleShow}>
                                                    Simu
                                                </Button>

                                                <Modal
                                                    show={show}
                                                    onHide={handleClose}
                                                    backdrop="static"
                                                    keyboard={false}
                                                >
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Simular Investimento</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        I will not close if you click outside me. Don't even try to press
                                                        escape key.
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>
                                                        <Button variant="primary">Understood</Button>
                                                    </Modal.Footer>
                                                </Modal>
                                            </Col> */}
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}