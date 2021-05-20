import React from 'react';
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Produit from '../components/Produit';
import {Component} from "react"
import Panier from './Panier';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

class Shop extends Component {
    state = {
        produits: [],
        informationsProduit:[],
        compteur:0
    };
  
    handleGetInfo = (id) => {
      const produits = [...this.state.produits];
      const informationsProduit = [...this.state.informationsProduit];
      const index = produits.findIndex((produit) => produit.id === id);
      informationsProduit.push(produits[index]);
      this.setState({informationsProduit});

      this.props.history.push({
        pathname: "/Shop/Informations",
        state: {informationsProduit} 
      })
  }
 
    handleAdd = (id, prix) => {
      const produits = [...this.state.produits];
      const informationsProduit = [...this.state.informationsProduit];
      const index = produits.findIndex((produit) => produit.id === id);
      informationsProduit.push(produits[index]);
      this.setState({informationsProduit});
      //this.formatTitle({informationsProduit});
  }

    handleDelete = (id) => {
      const informationsProduit = [...this.state.informationsProduit];
      const index = informationsProduit.findIndex((informationsProduit) => informationsProduit.id === id);
      informationsProduit.splice(index, 1)
      this.setState({informationsProduit});
  }

    handleVider = () => {
      const informationsProduit = [...this.state.informationsProduit];
      informationsProduit.splice(0, informationsProduit.length)
      this.setState({informationsProduit});
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

    /*formatTitle = (informationsProduit) => {
          var produit = informationsProduit[informationsProduit.length-1];
          var title = produit.title;
          const deuxPoint = title.indexOf(':');
          var format = title.substring(0,deuxPoint-1);
          while(format.charAt(format.length-1) !== ' ') {
              format = format.substring(0,format.length-1);
          }
          title = format;
          return title;
      }*/

    render() {
  
      toast.configure()

      const toastAdd = () =>{
        toast.success("Ajout au panier !",{
          autoClose: 750
        });
      }

      const toastRemove = () =>{
        toast.error("Le produit a été retiré du panier !",{
          autoClose: 750
        });
        console.log("gg")
      }

      const toastDelete = () =>{
        toast.error("Le panier a été vidé",{
          autoClose: 750
        });
        console.log("gg")
      }

      return (
        <div>
            <Header/>
            <Navigation/>
            <div>
              <div className="row">
                <div className="col">
                  <div className="row row-cols-2">
                        {this.state.produits.map((produit) => ( 
                                <div key={produit.id}>
                                    <Produit details={produit} onGet={this.handleGetInfo} onAdd={this.handleAdd} postSuccess={toastAdd}/>   
                                </div>
                      ))}
                  </div>  
                </div>
                <div className="col text-black panier" >
                      <h1 className="title-panier">Panier ({this.state.informationsProduit.length}) <button className="btn btn-danger button-panier" onClick={() => {this.handleVider(); toastDelete()}} >Vider le panier</button></h1> 
                        {this.state.informationsProduit.map((produit) => ( 
                                  <div key={produit.id}>
                                      <Panier details={produit} onDelete={this.handleDelete} postRemove={toastRemove}/>
                                  </div>
                              ))}
                    </div>  
                  </div>
              </div>
        </div>          
      
      );
    }
  }


export default Shop;