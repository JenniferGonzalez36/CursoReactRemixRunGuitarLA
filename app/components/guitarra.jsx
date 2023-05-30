import React from 'react'
import { Link } from '@remix-run/react';

const Guitarra = ({guitarra}) => {
    const { nombre, descripcion, imagen, precio, url } = guitarra;
    console.log(imagen)
  return (
    <div className='gitarra'>
        <img src={imagen.data.attributes.formats.small.url} alt={`Imagen guitarra ${nombre}`} />
        <div className='contenido'>
            <h3>{nombre}</h3>
            <p className='descripcion'>{descripcion}</p>
            <p className='precio'>${precio}</p>

            <Link className='enlace' to={`/guitarras/${url}`}>Ver Producto</Link>
        </div>
    </div>
  )
}

export default Guitarra