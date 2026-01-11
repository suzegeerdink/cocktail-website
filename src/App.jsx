import './App.css'
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/homepage/HomePage.jsx";
import CocktailCatalogPage from "./pages/cocktail-catalog-page/CocktailCatalogPage.jsx";
import CocktailDetailPage from "./pages/cocktail-detail-page/CocktailDetailPage.jsx";
import ProfilePage from "./pages/profile-page/ProfilePage.jsx";
import ErrorPage from "./pages/error-page/ErrorPage.jsx";
import LoginPage from "./pages/login-page/LoginPage.jsx";
import RegisterPage from "./pages/register-page/RegisterPage.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import ProtectedRoute from "./components/ProtectedRoutes.jsx";


function App() {

    return (
        <div className="page-container">
            <Navigation/>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/cocktail-catalog-page" element={<CocktailCatalogPage/>}/>
                    <Route path="/cocktail-detail-page/:id" element={<CocktailDetailPage/>}/>

                    <Route path="/profile-page" element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>

                    <Route path="/register-page" element={<RegisterPage/>}/>
                    <Route path="/login-page" element={<LoginPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </main>
            <footer>
                <p>footer</p>
            </footer>
        </div>
    )
}

export default App
