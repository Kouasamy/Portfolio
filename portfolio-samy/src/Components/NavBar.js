import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
         <nav class="navbar navbar-expand-lg bg-body-white">
            <div class="container-fluid">
    
             <div className="collapse navbar-collapse" id="navbarNav" style={{fontSize:'20px'}}>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Projet</a>
                  </li>
                  <li className="nav-item">
                  <a className="nav-link"aria-current="page" href="#">A propos</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
    )
  }
}
