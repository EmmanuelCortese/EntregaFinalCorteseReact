import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <div className='contenedorCart'>
        <h2>No hay productos en el carrito</h2>
        <Link className='miBtn' to='/'>
          Ver Productos
        </Link>
      </div>
    );
  }

  return (
    <div className='contenedorCart'>
      {carrito.map((prod) => (
        <div key={prod.id} className='cartItemContainer'>
          <CartItem item={prod.item} cantidad={prod.cantidad} />
        </div>
      ))}
      <h3>Total: $ {total}</h3>
      <button className='miBtn' onClick={vaciarCarrito}>
        Vaciar Carrito
      </button>
      <Link className='miBtn' to='/checkout'>
        Finalizar Compra
      </Link>
    </div>
  );
};

export default Cart;