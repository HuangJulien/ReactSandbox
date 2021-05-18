import React from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Produit from '../components/Produit';
import {Component} from "react"
//import Panier from '../components/Panier';
//import Informations from '../components/Informations';


class Shop extends Component {
    state = {
        produits: [],
        produitsAchete:[],
        informationsProduit:[]
    };
  
    handleGetInfo = (id) => {
      const produits = [...this.state.produits];
      const informations = [...this.state.informationsProduit]
      const index = produits.findIndex((produit) => produit.id === id);
      informations.push(produits[index]);
      this.setState(informations);

      this.props.history.push({
        pathname: "/Shop/Informations",
        state: informations
      })
  }

    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
        .then((response)=>{
            return response.json()
        })
        .then((result)=>{
            this.setState({produits:result})
        })

    }

    render() {
      return (
        <div>
            <Header/>
            <Navigation/>
            <div className="container">
              <div class="row row-cols-3">
                    {this.state.produits.map((produit) => ( 
                            <div>
                                <Produit info={this.state.produits} details={produit} achet={this.state.produitsAchete} onGet={this.handleGetInfo}/>   
                            </div>
                        ))}
              </div>          
            </div>
        </div>
      );
    }
  }


export default Shop;