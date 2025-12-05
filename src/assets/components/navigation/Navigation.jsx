import './Navigation.css';
import {NavLink} from 'react-router-dom';
import icon from '/src/assets/cocktail-icon.png';

function Navigation() {

    return (
        <header>
            <nav>
            <span>
                <img src={icon} alt="filler-image"/>
                <h3>Cocktail Counter</h3>
            </span>
                <div className="navbar-elements">
                    <ul className="menu-navbar">
                        <li><NavLink to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>home</NavLink></li>
                        <li><NavLink to="/profile-page" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>my account</NavLink></li>
                        <li><NavLink to="/cocktail-catalog-page" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>catalog</NavLink></li>
                    </ul>
                    <ul className="buttons-navbar">
                        <li>
                            <NavLink to="/login-page">{({ isActive }) => (<button className={isActive ? "active-button" : "default-button"}>Login</button>)}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register-page">{({ isActive }) => (<button className={isActive ? "active-button" : "default-button"}>Register</button>)}</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;