import React from 'react';
import Personnes from '../components/Personnes';

class Contact extends React.Component{
    
    state = {
        contributeurs: [
          { id: 1, nom: "Julien HUANG", lien: "https://www.linkedin.com/in/julien-huang-427b36175/", mail:"julien.huang2610@gmail.com"},
          { id: 2, nom: "Grégory CUSTOS", lien: "https://www.linkedin.com/in/julien-huang-427b36175/", mail:"gregcustos@hotmail.fr"}
        ]
      };

    render(){
    return (
        <div>
            <Header/>
            <Navigation/>
            <ul>
                {this.state.contributeurs.map((contributeur) => (    //Permet de mapper le tableau contributeurs
                   <Personnes details={contributeur}/>               //Permet d'initialiser le props details qui contient contributeur
                ))}
            </ul>
        </div>
    );
    };
};

export default Contact;