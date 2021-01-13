import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Row, Col, Dropdown } from 'react-bootstrap';
import { FaSave } from 'react-icons/fa';

//Chamada API 
import api from '../../services/api';


export default function NewProject() {

    const history = useHistory();

    // const id_project = localStorage.getItem('id_project');

    const [name_project, setName_project] = useState('');
    const [date_initial, setDate_initial] = useState('');
    const [date_final, setDate_final] = useState('');
    const [value, setValue] = useState('');
    const [risk, setRisk] = useState('');
    const [name_participant, setName_participant] = useState('');

    async function handleNewProject(e) {
        e.preventDefault();

        const data = {
            name_project,
            date_initial,
            date_final,
            value,
            risk,
            name_participant,
        };
        // console.log(data);
        try {
            const response = await api.post('/project/create', data)
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
            <div className="container-custom">
                <Form>
                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Nome do Projeto</Form.Label>
                                <Form.Control
                                    type="text"
                                    required="true"
                                    placeholder="nome do projeto"
                                    value={name_project}
                                    onChange={e => setName_project(e.target.value)}
                                    required={true}
                                />
                            </Col>
                            <Col>
                                <Form.Label>Valor do Projeto</Form.Label>
                                {/* <strong>VALOR: </strong> */}
                                {/* <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value.value)}</p> */}
                                <Form.Control
                                    type='number'
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    required
                                />
                                {/* {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value.value)} */}
                            </Col>
                        </Row>



                    </Form.Group>

                    <Form.Group>
                        <Row>
                            <Col>
                                <Form.Label>Data Início</Form.Label>
                                <Form.Control
                                    w type="date"
                                    value={date_initial}
                                    onChange={e => setDate_initial(e.target.value)}
                                    required
                                />
                            </Col>
                            <Col>
                                <Form.Label>Data de término</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={date_final}
                                    onChange={ e => setDate_final(e.target.value)}
                                    required
                                />
                            </Col>
                            <Col>
                            <Form.Label>Risco do projeto</Form.Label>
                                <select className="form-control" 
                                type='text'
                                value={risk}
                                onChange={ e => setRisk(e.target.value)}
                                required={true}
                                >
                                <option defaultValue="DEFAULT"></option>
                                <option value='0'>Baixo</option>
                                <option value='1'>Médio</option>
                                <option value='2'>Alto</option>
                                </select>
                                
                                {/* <Form.Control
                                    type="number"
                                    value={risk}
                                    onChange={e => setRisk(e.target.value)}
                                    required
                                /> */}
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Participantes do Projeto</Form.Label>
                        <Form.Control
                            type="text"
                            value={name_participant}
                            onChange={e => setName_participant(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button style={{ backgroundColor: '#262151'}} onClick={handleNewProject}>
                        <FaSave
                            size={20}
                            color="#eeeeee" />&nbsp;
                        Cadastrar
                    </Button>
                 &nbsp;
                 &nbsp;
                 <Button variant="danger" href="/">Voltar</Button>
                </Form>
            </div>
        </div>
    );
}


