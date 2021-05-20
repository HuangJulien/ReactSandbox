import React from 'react';
import Personnes from '../components/Personnes';
import Navigation from '../components/Navigation';
import Header from '../components/Header';

class Contact extends React.Component{
    
    state = {
        contributeurs: [
          { id: 1, nom: "Julien HUANG", lien: "https://www.linkedin.com/in/julien-huang-427b36175/", mail:"Julien.huang2610@gmail.com"},
          { id: 2, nom: "Grégory CUSTOS", lien: "https://www.linkedin.com/in/grégory-custos", mail:"gregcustos@gmail.com"},
          { id: 3, nom: "Farès AMIAR", lien: "https://www.linkedin.com/in/far%C3%A8s-amiar/", mail:"faresamiar1@gmail.com"}
        ],

      };

    render(){
    return (
        <div>
            <Header/>
            <Navigation/>
            <div name = "contact">
            <ul>
                {this.state.contributeurs.map((contributeur) => (    //Permet de mapper le tableau contributeurs
                   <Personnes details={contributeur}/>               //Permet d'initialiser le props details qui contient contributeur
                ))}
            </ul>
            </div>
        </div>
    );
    };
};

export default Contact;