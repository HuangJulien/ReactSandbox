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
      const produits = [...this.state.produits];                                       //On fait une copie du tableau
      //const informationsProduit = [...this.state.informationsProduit];               //On fait une copie du tableau
      const index = produits.findIndex((produit) => produit.id === id);                //On utilise findIndex qui va comparer l'id récupérer par l'id des produits 
     //informationsProduit.push(produits[index]);                                      //On push le produit avec l'index dans le tableau informationsProduit
     const info = produits[index];
     //console.log(info);
     //this.setState({informationsProduit});                                          //On actualise informationsProduit

      localStorage.setItem('produits', JSON.stringify(info));
      
      this.props.history.push({
        pathname: "/Shop/Informations",
        state: produits[index]
      })
  }
 
    handleAdd = (id, prix) => {
      const produits = [...this.state.produits];                                      //On fait une copie du tableau
      const informationsProduit = [...this.state.informationsProduit];                //On fait une copie du tableau
      const index = produits.findIndex((produit) => produit.id === id);               //On utilise findIndex qui va comparer l'id récupérer par l'id des produits
      informationsProduit.push(produits[index]);                                      //On push le produit avec l'index dans le tableau informationsProduit
      this.setState({informationsProduit});                                           //On actualise informationsProduit

      //this.formatTitle({informationsProduit});
  }

    handleDelete = (id) => {
      const informationsProduit = [...this.state.informationsProduit];                 //On fait une copie du tableau
      const index = informationsProduit.findIndex((informationsProduit) => informationsProduit.id === id);
      informationsProduit.splice(index, 1)                                             //On retire LE produit en question
      this.setState({informationsProduit});                                            //On actualise informationsProduit
  }

    handleVider = () => {
      const informationsProduit = [...this.state.informationsProduit];                 //On fait une copie du tableau
      informationsProduit.splice(0, informationsProduit.length)                        //On retire tous les produits selon la taille du tableau
      this.setState({informationsProduit});                                            //On actualise informationsProduit
    }


    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
        .then((response)=>{
            return response.json()                                                      
        })
        .then((result)=>{
            this.setState({produits:result})                                            //On change la valeur de produits par le résultat
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
  
      toast.configure() //Permet l'initialisation des toasts

      const toastAdd = () =>{                           //On crée la fonction qui va permettre d'afficher le toast
        toast.success("Ajout au panier !",{             //On l'affiche ici
          autoClose: 750                                //Les toasts ont plusieurs paramètres
        });
      }

      const toastRemove = () =>{
        toast.error("Le produit a été retiré du panier !",{        //On crée la fonction qui va permettre d'afficher le toast
          autoClose: 750                                           //On l'affiche ici
        });                                                        //Les toasts ont plusieurs paramètres
        console.log("gg")
      }

      const toastDelete = () =>{                  
        toast.error("Le panier a été vidé",{                       //On crée la fonction qui va permettre d'afficher le toast
          autoClose: 750                                           //On l'affiche ici
        });                                                        //Les toasts ont plusieurs paramètre
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