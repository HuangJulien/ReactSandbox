//import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
//import {NavLink} from "react-router-dom"
//import Informations from "../pages/Informations";
//import {Link} from "react-router-dom"

const Produit = ({ details, onGet }) => (

        <Card className="card-product">
            <Card.Img variant="top" className="card-image" src={details.image} />
            <Card.Body>
                <Card.Title className="card-title">{details.title}</Card.Title>
                <Button className="card-button" variant="primary">Acheter</Button>
                    <Button type="button" className="card-button" onClick={() => onGet(details.id)}>               
                                En savoir plus
                    </Button>
            </Card.Body>
        </Card> 
);


export default Produit;