import styles from '~/styles/carrito.css';
import { useOutletContext } from '@remix-run/react';

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

export function meta(){
    return [
        {title: 'GuitarLA - Carrito de Compras'},
        {description: 'Venta de guitarras, música, blog, carrito de compras, tienda'}
    ]
}

import React from 'react'

export default function Carrito() {
    const {carrito} = useOutletContext();
  return (
    <main className='contenedor'>
        <h1 className='heading'>Carrito de Compras</h1>

        <div className='contenido'>
            <div className='carrito'>
                <h2>Articulos</h2>
                {carrito.length === 0 ? 'Carrito Vacío' : (
                    carrito.map(producto => (
                        <div key={producto.id} className='producto'>
                            <div>
                                <img src={producto.imagen} alt={`Imagen del producto ${producto.nombre}`} />
                            </div>
                            <div>
                                <p className='nombre'>{producto.nombre}</p>
                                <p>Cantidad: {producto.cantidad}</p>
                                <p className='precio'>$ <span>{producto.precio}</span></p>
                                <p className='subtotal'>Subtotal:$ <span>{producto.precio * producto.cantidad}</span></p>
                            </div>
                        </div>
                    ))
                )}
            </div>
                
            <aside className='resumen'>
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: $</p>
            </aside>
        </div>
    </main>
  )
}
