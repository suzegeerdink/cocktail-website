import './Navigation.css';

function Navigation() {
    return (
        <header>
            <nav>
            <span>
                <img src="src/assets/cocktail-icon.png" alt="filler-image"/>
                <h3>Cocktail Counter</h3>
            </span>
                <div className="navbar-elements">
                    <ul className="menu-navbar">
                        <li>home</li>
                        <li>my account</li>
                        <li>catalog</li>
                    </ul>
                    <ul className="buttons-navbar">
                        <li>
                            <button>login</button>
                        </li>
                        <li>
                            <button>register</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;