import React, { Component } from 'react';
import monImage from '../Components/Images/pauloChakal.png';
import monImage2 from '../Components/Images/yango.png';
import monImage3 from '../Components/Images/white.png';

export default class Projet extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-5">MES PROJETS : </h1>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={monImage} className="card-img-top" alt="..."/>  
              <div className="card-body">
                <h5 className="card-title">PROJET KING OF RAP</h5>
                <p className="card-text">Réalisation du Site de l'artiste Paulo Chakal au vue de l'évènement KING OF RAP.</p>
                <a href="https://kouasamy.github.io/Paulo-Chakal-Projet/" className="btn btn-primary">Visiter le site</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={monImage2} className="card-img-top" alt="..."/>  
              <div className="card-body">
                <h5 className="card-title">YANGO</h5>
                <p className="card-text">Refonte du site de Yango.</p>
                <a href="https://kouasamy.github.io/Yango-web/" className="btn btn-primary">Visiter le site</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src={monImage3} className="card-img-top" alt="..."/>  
              <div className="card-body">
                <h5 className="card-title">W H I T E C U B E</h5>
                <p className="card-text">Projet UX/UI d'un site d'Art</p>
                <a href="https://kouasamy.github.io/artwebsite/" className="btn btn-primary">Visiter le site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
