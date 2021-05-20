import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';
//import { BackHandler } from 'react-native';


const Produit = ({ details, onGet, onAdd, postSuccess}) => {


        return(
        <div>
            <Card className="card-product">
                <Card.Img variant="top" className="card-image" src={details.image} />
                <Card.Body>
                    <Card.Title className="card-title">{details.title}</Card.Title>
                        <Button className="card-button" variant="primary" onClick={() => {onAdd(details.id, details.prix); postSuccess()}}>
                            Acheter
                        </Button>
                    <Button type="button" className="card-button" onClick={() => onGet(details.id)}>En savoir plus</Button>
                </Card.Body>
            </Card> 
        </div>   
        );
};


export default Produit;