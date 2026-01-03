import './ProfilePage.css';
import { useContext } from "react";
import { CocktailContext } from "../../context/CocktailContext.jsx";
import { FavoriteContext } from "../../context/FavoriteContext";
import { ozToMl } from "../../helpers/helperUnits.js";
import {isAlcoholicCocktail} from "../../helpers/isCocktailAlcoholic.js";
import { UserContext } from "../../context/UserContext";

function ProfilePage() {
    const { todaysCocktails, removeCocktail } = useContext(CocktailContext);
    const { favoriteCocktails, removeFavorite } = useContext(FavoriteContext);
    const { user, logout } = useContext(UserContext);

    //Amount of ML for only the alcoholic cocktails
    const totalAlcoholMl = todaysCocktails.reduce(
        (totalMl, cocktail) => {
            if (!isAlcoholicCocktail(cocktail)) return totalMl;
            return totalMl + ozToMl(cocktail.amountOz || 0);
        },
        0
    );

    const waterMl = totalAlcoholMl * 1.5;
    const waterGlasses = Math.ceil(waterMl / 250);

    //Amount of all cocktails in ML
    let totalMl = 0;

    for (const cocktail of todaysCocktails) {
        if (cocktail.amountOz) {
            totalMl += ozToMl(cocktail.amountOz);
        }
    }


    return (
        <div className="profile-page">
            <header className="intro-section-smaller">
                <h1>Cocktail Counter</h1>
            </header>

            <main className="profile-information">
                <p>
                    Hi [name], you drank <strong>{todaysCocktails.length} cocktails</strong> ({Math.round(totalMl)} ML total),
                    so drink about <strong>{waterGlasses} glasses of water</strong> ({Math.round(waterMl)} ML) to stay hydrated!
                </p>
                <section className="cocktails-today">
                    <h2>Cocktails today</h2>
                    <ul>
                        {todaysCocktails.map((c, i) => (
                            <li key={i} className="cocktail-list">
                                <button onClick={() => removeCocktail(i)} className="delete-button">✕</button>
                                <p>{c.name}</p>
                                <p>{c.amountOz ? Math.round(ozToMl(c.amountOz)) + " ML" : "0 ML"}</p>
                            </li>
                        ))}
                    </ul>
                    <p className="divider-line"></p>
                    <span className="span-total"><strong>Total:</strong> {Math.round(totalMl)} ML</span>
                </section>
                <section className="favorite-cocktails">
                    <h2>Favorite cocktails</h2>
                    <ul className="favorite-list">
                        {favoriteCocktails.length === 0 && <p>No favorite cocktails yet.</p>}
                        {favoriteCocktails.map((cocktail) => (
                            <li key={cocktail.idDrink}>
                                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                                <p>{cocktail.strDrink}</p>
                                <button onClick={() => removeFavorite(cocktail.idDrink)} className="remove-button">Remove</button>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default ProfilePage;