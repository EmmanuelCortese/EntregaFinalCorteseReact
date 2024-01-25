import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <h1>Mi Tienda</h1>
      <nav>
       <ul>
         <li>
           <NavLink to="/categoria/1">
             Shonen
           </NavLink>
         </li>

         <li>
           <NavLink to="/categoria/2">
             Spokon
           </NavLink>
         </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default NavBar;
