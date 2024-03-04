import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext'; 
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, stock, precio, img, descripcion }) => { // Agrega 'descripcion' a los parámetros
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const {agregarAlCarrito} = useContext(CarritoContext);
  const manejadorCantidad =  (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = {id, nombre, precio};
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2> {nombre} </h2>
      <p>Sinopsis: {descripcion}</p> {/* Muestra la descripción aquí */}
      <img src={img} alt={nombre} />

      {
        agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
      
    </div>
  )
}

export default ItemDetail;