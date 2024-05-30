import React, { Component } from 'react'
import backgroundImage from '../Components/Images/dev3.jpg'; // Importer votre image


export default class Header extends Component {
  render() {
    return (
      <div>
        <div>
        <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize: 'cover', backdropFilter: 'brightness(0.5)' }} className='container-fluid'>
          <div className='row'>
          <nav className="navbar navbar-expand-lg bg-body-white">
            <div className="container-fluid">
    
             <div className="collapse navbar-collapse" id="navbarNav" style={{fontSize:'20px'}}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <a className="nav-link"aria-current="page" style={{cursor:'pointer'}}>Accueil</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link"aria-current="page" style={{cursor:'pointer'}}>Projet</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link"aria-current="page" style={{cursor:'pointer'}}>A propos</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>


            <div className='row h-90'>
                <div className='col d-flex align-items-center justify-content-center' style={{flexDirection:'column',marginTop:'30vh'}}>
                    <h1 className='mt-2' style={{fontSize:'60px'}}>KOUAT SAMUEL</h1>
                    <h3  style={{fontSize:'40px'}}>I'm a <span style={{color:'blue'}}>FRONT-END</span> DEVELOPPER</h3>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                  <button className='button' type='submit' style={{height:'50px', width:'150px', margin:'10px', background:'white', border:'white 2px solid'}}>Voir les Projets</button>
                <button type='submit' style={{height:'50px', width:'150px', margin:'10px', background:'white', border:'white'}}>A propos de moi</button>
                </div>
                
            </div>
        </div>
        </div>
      </div>
    )
  }
}
