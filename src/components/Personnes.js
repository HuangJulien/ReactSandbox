import React from 'react';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'

const Personnes = ({details}) => {
    
    return (
        <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {details.nom}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
                <ul>
                    <li>
                        Adresse Mail : {details.mail}
                        <br></br>
                        Linkedin : <a href={details.lien} target="_blank" rel="noreferrer">{details.lien}</a>

                    </li>
                </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
};

export default Personnes;