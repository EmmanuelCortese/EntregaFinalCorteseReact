import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = ({id, nombre, stock, precio, img}) => { 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const manejadorCantidad =  (cantidad) => {
    setAgregarCantidad(cantidad);
  
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
}

return (
    <div className='ContenedorItems'>
        <h2>Nombre: {nombre} </h2>
        <h3>Nombre: {precio} </h3>
        <p>ID: {id} </p>
        <p>Stock: {stock} </p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, minus quos sunt ipsum odit eius nihil voluptates numquam culpa soluta alias veritatis est exercitationem magnam, laborum aperiam cum tenetur consectetur.</p>
        <img src={img} alt={nombre} />
        
        {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra</Link>) : (<ItemCount incial = {1} stock = {stock} funcionAgregar = {manejadorCantidad} />)
        }

    </div>
  )
}

export default ItemDetail