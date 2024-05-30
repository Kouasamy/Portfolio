import React, { Component } from 'react'
import backgroundImage from '../Components/Images/dev3.jpg';

export default class Apropos extends Component {
  render() {
    return (
      <> 
      <div style={{display:'flex',justifyContent:'center', alignItems:'center', background:'blackmoon'}}>
      <h1 className='d-flex jutify-content-center mt-4'>Qui suis je ?</h1>
      </div>
      
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column", height:'80vh', background:'blackmoon'}}>
        <img/>
          <div style={{margin:'10px'}}>
          <p style={{fontSize:'25px'}}className='text-wrap'>
          Je suis Kouat Samuel, jeune développeur de 19 ans très passionné du digitale mais surtout du Développement web.
          Maintenant <span>développeur Front-END </span>je créer des sites web de qualité pour des entreprises.
          </p>  
          <h3 style={{display:'flex', justifyContent:'center', alignItems:'center',fontSize:'50px', marginTop:'50px'}}>Mes Skills : </h3>
          <div style={{margin:'80px', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <span style={{padding:'20px',fontSize:'35px',color:'goldenrod',cursor:'pointer'}}>HTML/CSS</span>
            <span style={{padding:'20px', fontSize:'35px',color:'goldenrod',cursor:'pointer'}}>JS</span>
            <span style={{padding:'20px', fontSize:'35px',color:'goldenrod',cursor:'pointer'}}>PHP</span>
            <span style={{padding:'20px', fontSize:'35px',color:'goldenrod',cursor:'pointer'}}>LARAVEL</span>
           </div>
        
        </div>
        </div>
      

      </>
    )
  }
}
