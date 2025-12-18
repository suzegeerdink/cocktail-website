import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import {CocktailProvider} from "./context/CocktailContext.jsx";
import {FavoriteProvider} from "./context/FavoriteContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <CocktailProvider>
                <FavoriteProvider>
                    <App/>
                </FavoriteProvider>
            </CocktailProvider>
        </Router>
    </StrictMode>,
)
