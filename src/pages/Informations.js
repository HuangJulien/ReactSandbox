import React, { Component } from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";

class Informations extends Component {


    state = {
        produitsInfos: []
    };
    /*
    componentDidMount(){
        const produits2 = localStorage.getItem('produits');
        this.setState(produits2);
        console.log(produits2);
    }
    */

    render() {
        /*
        const {state} = this.props.location;
        const produitsInfos = [...this.state.produitsInfos];
        produitsInfos.push({state});
        this.setState({produitsInfos})
        console.log(produitsInfos)
        */
        return (
            <div>
                <Header/>
                <Navigation/>
                <div>

                </div>
            </div>
        );
    }
}

export default Informations;