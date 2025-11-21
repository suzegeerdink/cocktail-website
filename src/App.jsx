import './App.css'
import HomePage from "./assets/pages/homepage/HomePage.jsx";
import CocktailCatalogPage from "./assets/pages/cocktail-catalog-page/CocktailCatalogPage.jsx";
import CocktailDetailPage from "./assets/pages/cocktail-detail-page/CocktailDetailPage.jsx";
import ProfilePage from "./assets/pages/profile-page/ProfilePage.jsx";
import ErrorPage from "./assets/pages/error-page/ErrorPage.jsx";
import LoginPage from "./assets/pages/login-page/LoginPage.jsx";
import RegisterPage from "./assets/pages/register-page/RegisterPage.jsx";


function App() {

    return (
        <>
            <main>
                <HomePage/>
                <CocktailCatalogPage/>
                <CocktailDetailPage/>
                <ProfilePage/>
                <ErrorPage/>
                <LoginPage/>
                <RegisterPage/>
            </main>
            <footer>
                <p>footer</p>
            </footer>
        </>
    )
}

export default App
