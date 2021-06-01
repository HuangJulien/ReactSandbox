import React, { Component } from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";

class Informations extends Component {


    state = {
        produitsInfos: []
    };
    
    /*
    componentDidMount(){
        //const produits2 = JSON.parse(localStorage.getItem('produits'));
        const produits2 = localStorage.getItem('produits');
        console.log(produits2);
    }
    

     
    componentDidMount(){
        const {state} = this.props.location;
        const produitsInfos = [...this.state.produitsInfos];
        produitsInfos.push({state});
        this.setState({produitsInfos})
    }
    */

    render() {

        /*
        const {state} = this.props.location;
        const produitsInfos = [...this.state.produitsInfos];
        produitsInfos.push({state});
        this.setState({produitsInfos})
        console.log({produitsInfos})
        
        const produits2 = localStorage.getItem('produits');
        console.log(produits2);
        */

        //const produits2 = JSON.parse(localStorage.getItem('produits'));
        const produits2 = localStorage.getItem('produits');


        return (
            <div>
                <Header/>
                <Navigation/>
                <div>
                    {produits2}              
                </div>
            </div>
        );
    }
}

export default Informations;