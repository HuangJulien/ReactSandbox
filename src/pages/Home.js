import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';


class Home extends React.Component{

    render(){
        const desc = "Site réalisé par Julien HUANG et Grégory CUSTOS";
    return (
        <div>
            <Header/>
            <Navigation/>
            <br></br>
            <p>{desc}</p>
        </div>
    );
}
};

export default Home;