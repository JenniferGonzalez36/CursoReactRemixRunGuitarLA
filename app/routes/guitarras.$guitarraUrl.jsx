import React from 'react'
import { getGuitarra } from '~/models/guitarras.server';
import { useLoaderData } from '@remix-run/react';

export async function loader({params}){
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);
  if(guitarra.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra No Encontrada'
    })
  }
  return guitarra;
}

export function meta({data}){
  if(!data || (typeof data === 'object' && (Object.keys(data).length === 0 || data === null))) {
    return [
      {title: 'GuitarLA - Guitarra No encontrada'},
      {description: `Guitarras, venta de guitarras, guitarra no encontrada`}
    ];
  }
  const { nombre } = data.data[0].attributes;
  return [
    {title: `GuitarLA - ${ nombre }`},
    {description: `Guitarras, venta de guitarras, guitarra ${ nombre }`}
  ]
}

const Guitarra = () => {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes; 

  return (
    <div className='guitarra'>
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='texto'>{descripcion}</p>
        <p className='precio'>${precio}</p>
      </div>

    </div>
  )
}

export default Guitarra