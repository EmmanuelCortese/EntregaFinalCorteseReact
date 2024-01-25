import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div  className='CardProducto'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>ID: {id} </p>
        <p>Precio: {precio} </p>
        <button onClick={() => console.log('Detalles clicked')}> Detalles </button>
    </div>
  )
}

export default Item