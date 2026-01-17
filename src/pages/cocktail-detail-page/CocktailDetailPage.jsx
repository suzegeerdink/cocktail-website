import './CocktailDetailPage.css';
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CocktailContext } from "../../context/CocktailContext.jsx";
import { FavoriteContext } from "../../context/FavoriteContext";
import { isCocktailFavorite } from "../../helpers/favoriteCocktail.js";
import { mlToOz } from "../../helpers/helperUnits.js";
import { UserContext } from "../../context/UserContext";

function CocktailDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cocktail, setCocktail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);

    const [error, setError] = useState("");

    const { addCocktail } = useContext(CocktailContext);
    const { addFavorite, favoriteCocktails, removeFavorite } = useContext(FavoriteContext);
    const isFavorite = cocktail ? isCocktailFavorite(favoriteCocktails, cocktail) : false;

    const { user } = useContext(UserContext);

    useEffect(() => {
        const fetchCocktail = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                setCocktail(data.drinks[0]);
            } catch (error) {
                console.error("Error fetching cocktail:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCocktail();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!cocktail) return <p>Cocktail not found</p>;

    const ingredients = [];
    for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        if (ingredient) ingredients.push(ingredient);
    }

    const handleAdd = () => {
        if (!totalAmount || totalAmount <= 0 || isNaN(totalAmount)) {
            setError("Voer een geldige hoeveelheid in ML in!");
            return;
        }

        const amountOz = mlToOz(totalAmount);
        addCocktail({
            id: cocktail.idDrink,
            name: cocktail.strDrink,
            amountOz,
            strAlcoholic: cocktail.strAlcoholic,
        });

        setError("");
        navigate("/profile-page");
    };

    return (
        <div className="detail-page">
            <header className="intro-section-smaller">
                <h1>Cocktail Counter</h1>
            </header>
            <main className="outer-container-detailpage">
                <article className="inner-container-detailpage">
                    <div className="title-and-icon">
                        <h2>{cocktail.strDrink}</h2>
                        <button
                            className="star-button"
                            onClick={() => {
                                if (!user) return;
                                if (isFavorite) removeFavorite(cocktail.idDrink);
                                else addFavorite(cocktail);
                            }}
                            disabled={!user}
                        >
                            {isFavorite ? "★" : "☆"}
                        </button>
                    </div>

                    <section className="cocktailcard-main-content">
                        <div className="image-and-recipe">
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                            <section className="cocktail-text">
                                <p><strong>Ingredients:</strong> {ingredients.join(', ')}</p>
                                <p><strong>Recipe:</strong> {cocktail.strInstructions}</p>
                                <p><strong>Glass:</strong> {cocktail.strGlass}</p>
                            </section>
                        </div>

                        <div className="buttons-card">
                            <div className="amount-options">
                                <label htmlFor="totalAmount"><strong>Enter your amount in ML :</strong></label>
                                <input
                                    type="number"
                                    id="totalAmount"
                                    name="totalAmount"
                                    placeholder="200"
                                    min="0"
                                    value={totalAmount}
                                    onChange={(e) => setTotalAmount(Number(e.target.value))}
                                />
                            </div>
                            {error && <p className="input-error">{error}</p>}
                            <div className="action-buttons">
                                <button onClick={handleAdd} disabled={!totalAmount || totalAmount <= 0 || isNaN(totalAmount)}>add to list</button>
                                <button onClick={() => navigate(-1)}>back</button>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
        </div>
    );
}

export default CocktailDetailPage;