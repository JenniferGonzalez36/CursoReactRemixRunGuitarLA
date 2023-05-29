import React from 'react'
import { Link } from '@remix-run/react';
import logo from "../../public/img/logo.svg";
import Navegacion from './navegacion';

const Header = () => {

  return (
    <header className='header'>
        <div className='contendedor barra'>
            <Link to="/" className='logo'>
                <img className="logo" src={logo} alt="Imagen logo" />
            </Link>
            
            <Navegacion />
        </div>
    </header>
  )
}

export default Header