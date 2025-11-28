import './App.css'
import {Routes, Route} from 'react-router-dom';
import HomePage from "./assets/pages/homepage/HomePage.jsx";
import CocktailCatalogPage from "./assets/pages/cocktail-catalog-page/CocktailCatalogPage.jsx";
import CocktailDetailPage from "./assets/pages/cocktail-detail-page/CocktailDetailPage.jsx";
import ProfilePage from "./assets/pages/profile-page/ProfilePage.jsx";
import ErrorPage from "./assets/pages/error-page/ErrorPage.jsx";
import LoginPage from "./assets/pages/login-page/LoginPage.jsx";
import RegisterPage from "./assets/pages/register-page/RegisterPage.jsx";
import Navigation from "./assets/components/navigation/Navigation.jsx";


function App() {

    return (
        <>
            <div className="page-container">
            <Navigation/>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/cocktail-catalog-page" element={<CocktailCatalogPage/>}/>
                    <Route path="/cocktail-detail-page/" element={<CocktailDetailPage/>}/>
                    <Route path="/profile-page" element={<ProfilePage/>}/>
                    <Route path="/register-page" element={<RegisterPage/>}/>
                    <Route path="/login-page" element={<LoginPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </main>
            <footer>
                <p>footer</p>
            </footer>
                </div>
        </>
    )
}

export default App
