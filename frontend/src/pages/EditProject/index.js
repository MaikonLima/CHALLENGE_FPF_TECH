import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { FaPen, FaTrash } from 'react-icons/fa';
import './styles.css';
import Swal from 'sweetalert2';
import swal from  'sweetalert';
import { Card, Button, Tab, Sonnet, Tabs, Row, Col } from 'react-bootstrap';
import api from "../../services/api";


export default function Home() {

    const [project, setProject] = useState([]);

    async function handleUpdateProject(id_project) {
        
        try {
            await api.update(`/project/update/${id_project}`);
            
        } catch (err) {
            console.log(id_project)
            alert("Erro ao editar projeto, tente novamente.");
        }
    }
    return (
        <div>
            <header>Editar de Projetos</header>
            <div className="container-custom">
                <div className="py-5">
                    <div className="row d-flex">

                        {project.map((item, key) =>
                            <div className="col-lg-4 mb-5" key={item.id}>
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