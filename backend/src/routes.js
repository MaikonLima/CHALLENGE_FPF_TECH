const express = require('express');
const routes =express.Router();


const projetoController = require('./controller/projetoController');


routes.get('/project', projetoController.index); //Listar todos os Projetos
routes.get('/project/:id_project', projetoController.getProjectById);
routes.post('/project/create', projetoController.create); //Criar um novo Cadastro de Projeto
routes.delete('/project/delete/:id_project', projetoController.delete); //Deletar um Projeto existente
routes.put('/project/update', projetoController.update); //Editar um Projeto existente


module.exports = routes;
