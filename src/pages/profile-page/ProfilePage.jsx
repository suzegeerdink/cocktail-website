import './ProfilePage.css'
import cocktailimage from '/src/assets/bloody-mary.jpg'
import { calculateTotalAmount } from "../../helpers/totalAmountCocktails.js";
import { useContext } from "react";
import { CocktailContext } from "../../context/CocktailContext.jsx";

function ProfilePage() {
    const { todaysCocktails, removeCocktail } = useContext(CocktailContext);

    const totalAmount = calculateTotalAmount(todaysCocktails);

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
                            <ul>
                                <img src={cocktailimage} alt="filler picture"/>
                                <img src={cocktailimage} alt="filler picture"/>
                                <img src={cocktailimage} alt="filler picture"/>
                                <img src={cocktailimage} alt="filler picture"/>
                                <img src={cocktailimage} alt="filler picture"/>
                            </ul>
                        </section>
                </main>
            </div>
    )
}

export default ProfilePage