import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

//Componentes
import Home from './pages/Home/index';
import NewProject from './pages/NewProject';
import EditProject from './pages/EditProject';


function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/new" component={NewProject}/>
                <Route path="/editar/:id_project" component={EditProject}/>
            </Switch>
        </BrowserRouter>
    );
}



export default Routes;