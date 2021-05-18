import React, { Component } from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";

class Informations extends Component {

    state = {
        produitsInfo: [],
    };

    render() {

        const produits = this.props.location.state;
        this.state.produitsInfo.push(produits);
        console.log(produits);
        
        return (
            <div>
                <Header/>
                <Navigation/>
                <div>
                    <button>X</button>
                </div>
            </div>
        );
    }
}

export default Informations;