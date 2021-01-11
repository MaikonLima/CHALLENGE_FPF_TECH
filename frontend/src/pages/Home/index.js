import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { FaPen, FaTrash } from 'react-icons/fa';
import './styles.css';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { Card, Button, Tab, Sonnet, Tabs, Row, Col } from 'react-bootstrap';
import api from "../../services/api";


export default function Home() {

    // const id_project = localStorage.getItem('id_project');

    const [project, setProject] = useState([]);
    const history = useHistory();


    useEffect(() => {
        api.get("project")
            .then((response) => {
                setProject(response.data);
            });
    });

    async function handleDeleteProject(id_project) {

        await api.delete(`/project/delete/${id_project}`);
    }

    return (
        <div>
            <header>Gestão de Projetos</header>
            <div className="container-custom">
                <Button href="/new">Novo Projeto</Button>
                &nbsp;
                &nbsp;
                <Button className="btn btn-primary" href="#">Simular Investimento</Button>
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
                                                    <Button
                                                        variant="warning">
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
                                                    variant="danger"><FaTrash
                                                        size={20}
                                                        color="#eeeeee" />&nbsp;Excluir</Button>
                                            </Col>
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