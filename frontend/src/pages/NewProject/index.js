import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

//Chamada API 
import api from '../../services/api';


export default function NewProject() {

    const history = useHistory();

    const id_project = localStorage.getItem('id_project');

    const [nome_project, setNome_project] = useState('');
    const [data_inicio, setData_inicio] = useState('');
    const [data_termino, setData_termino] = useState('');
    const [valor, setValor] = useState('');
    const [risco, setRisco] = useState('');
    const [participantes, setParticipantes] = useState('');

    async function handleNewProrject(e) {
        e.preventDefault();

        const data = {
            nome_project,
            data_inicio,
            data_termino,
            valor,
            risco,
            participantes,
        };

        try {
            const response = await api.post('/projects/create', { data })
            console.log(response);
        } catch (err) {
            alert('Erro ao cadastrar projeto, tente novamente.');
        }


    }

    return (
        <div>
            <header>Novo Projeto</header>
            <br></br>
            <br></br>
            <div className="container-sm">
                <Form>
                    <Form.Group>
                        <Form.Label>Nome do Projeto</Form.Label>
                        <Form.Control
                            type="text"
                            required="true"
                            placeholder="nome do projeto"
                            value={nome_project}
                            onChange={e => setNome_project(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Data Início</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={data_inicio}
                                    onChange={e => setData_inicio(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <Form.Label>Data de término</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={data_termino}
                                    onChange={e => setData_termino(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Valor do Projeto</Form.Label>
                                <Form.Control
                                    type="money"
                                    value={valor}
                                    onChange={e => setValor(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <Form.Label>Risco do projeto</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={risco}
                                    onChange={e => setRisco(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Participantes do Projeto</Form.Label>
                        <Form.Control
                            type="text"
                            value={participantes}
                            onChange={e => setParticipantes(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" onClick={handleNewProrject}>
                        Cadastrar Projeto
                    </Button>
                 &nbsp;
                 &nbsp;
                 <Button variant="danger" type="submit">
                        Cancelar
                 </Button>
                </Form>
            </div>

        </div>
    );
}


