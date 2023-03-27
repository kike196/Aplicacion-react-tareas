import React from "react";
import LogoImg from '../imagenes/FreeCodeCamp_logo.png';
import '../App.css';

const Logo = (props) => (
  <div className='logo-contenedor'> 
    <img 
      src={LogoImg} 
      className='freecodecamp-logo'
      alt=""
    />
  </div>
);

export default Logo;