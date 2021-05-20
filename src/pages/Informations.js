import React, { Component } from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";

class Informations extends Component {

    render() {
        
        const {state} = this.props.location;
        //const produitsInfos = [...this.state.produitsInfo];
        //produitsInfos.push(produits);
        //this.setStat({produitsInfos : produits})
        console.log(state)
        
        
        return (
            <div>
                <Header/>
                <Navigation/>
                <div>
                    {this.state}
                </div>
            </div>
        );
    }
}

export default Informations;