import React, { useEffect, useState } from "react";
import './styles.css';


import { Card, Button} from 'react-bootstrap';
// import api from "../../services/api";


export default function Home() {
    return (
        <div>
            <header>Gestão de Projetos</header>
            <br></br>
            <br></br>
            <div className="container">
                <Card style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}