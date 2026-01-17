import './Navigation.css';
import {NavLink} from 'react-router-dom';
import icon from '/src/assets/cocktail-icon.png';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

function Navigation() {
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

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
                        <li>
                            {user ? (
                                <NavLink to="/profile-page" className={({ isActive }) => isActive ? 'active-link' : 'default-link'}>my account</NavLink>
                            ) : (
                                <button className="default-link disabled-link link-button" disabled>my account</button>
                            )}
                        </li>
                        <li><NavLink to="/cocktail-catalog-page" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>catalog</NavLink></li>
                    </ul>
                    <ul className="buttons-navbar">
                        {user ? (
                            <li>
                                <button className="default-button logout-button" onClick={handleLogout}>Logout</button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/login-page">
                                        {({ isActive }) => (
                                            <button className={isActive ? "active-button" : "default-button"}>Login</button>
                                        )}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register-page">
                                        {({ isActive }) => (
                                            <button className={isActive ? "active-button" : "default-button"}>Register</button>
                                        )}
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;