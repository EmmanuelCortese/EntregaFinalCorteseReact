import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom";
import './NavBar.css';


const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='logo' src="./img/ProjectLogo1.png" alt="Logo Catino" />
      </Link>

        <nav>
            <ul>

                <li>
                  <NavLink className="miBtn" to="/categoria/1">
                    Shonen
                  </NavLink>
                </li>

                <li>
                  <NavLink className="miBtn" to="/categoria/2">
                    Spokon
                  </NavLink>
                </li>

                <li>
                  <NavLink className="miBtn" to="/categoria/3">
                    Seinen
                  </NavLink>
                </li>

            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

export default NavBar