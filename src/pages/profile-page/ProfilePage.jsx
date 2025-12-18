import './ProfilePage.css'
import { calculateTotalAmount } from "../../helpers/totalAmountCocktails.js";
import { useContext } from "react";
import { CocktailContext } from "../../context/CocktailContext.jsx";
import { FavoriteContext } from "../../context/FavoriteContext";

function ProfilePage() {
    const { todaysCocktails, removeCocktail } = useContext(CocktailContext);
    const totalAmount = calculateTotalAmount(todaysCocktails);

    const { favoriteCocktails, removeFavorite } = useContext(FavoriteContext);

    return (
            <div className="profile-page">
                <header className="intro-section-smaller">
                    <h1>Cocktail Counter</h1>
                </header>
                <main className="profile-information">
                    <p>Hi [name], you should drink ... ML water to compensate with the amount of cocktails you've taken! </p>
                        <section className="cocktails-today">
                            <h2>Cocktails today</h2>
                            <ul>
                                {todaysCocktails.map((c, i) => (
                                    <li key={i} className="cocktail-list">
                                        <button onClick={() => removeCocktail(i)} className="delete-button">
                                            ✕
                                        </button>
                                        <p>{c.name}</p>
                                        <p>{c.amount} ML</p>
                                    </li>
                                ))}
                            </ul>
                            <p className="divider-line"></p>
                            <span className="span-total"><strong>Total:</strong><strong>{totalAmount} ML</strong></span>
                        </section>
                        <section className="favorite-cocktails">
                            <h2>Favorite cocktails</h2>
                            <ul className="favorite-list">
                                {favoriteCocktails.length === 0 && <p>No favorite cocktails yet.</p>}
                                {favoriteCocktails.map((cocktail) => (
                                    <li key={cocktail.idDrink}>
                                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                                        <p>{cocktail.strDrink}</p>
                                        <button
                                            onClick={() => removeFavorite(cocktail.idDrink)}
                                            className="remove-button"> Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </section>
                </main>
            </div>
    )
}

export default ProfilePage