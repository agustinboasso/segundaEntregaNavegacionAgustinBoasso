import './NavBar.css'
import  CartWidget  from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <div>
            <img src="/images/logo.png" alt="logo" width="70px" />
            
            
        </div>
        <div>
            <ul className="options">
                
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="/" style={{ textDecoration: 'none' }}>
                        Todo
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="category/men's clothing" style={{ textDecoration: 'none' }}>
                       Accesorios Hombre
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'}   to="category/women's clothing" style={{ textDecoration: 'none' }}>
                       Accesorios Mujer
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="/category/jewelery" style={{ textDecoration: 'none' }}>
                        Joyeria
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive}) => isActive ? 'active' : 'inactive'} to="/category/electronics" style={{ textDecoration: 'none' }}>
                        Electro
                    </NavLink>
                </li>
            </ul>
        </div>
        <div>
            <CartWidget/>
        </div>
    </div>
    
  )
};

export default NavBar;