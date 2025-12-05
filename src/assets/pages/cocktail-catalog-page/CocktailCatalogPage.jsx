import './CocktailCatalogPage.css';
import axios from 'axios';
import { useState, useEffect } from "react";

function CocktailCatalogPage() {
    const [allCocktails, setAllCocktails] = useState([]);
    const [visibleCount, setVisibleCount] = useState(12);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCocktails() {
            const letters = "abcdefghijklmnopqrstuvwxyz".split("");
            const all = [];

            try {
                for (const letter of letters) {
                    const response = await axios.get(
                        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
                    );
                    if (response.data.drinks) all.push(...response.data.drinks);
                }
                setAllCocktails(all);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        fetchCocktails();
    }, []);

    if (loading) return <p>Loading cocktails...</p>;

    const shown = allCocktails.slice(0, visibleCount);

    const loadMore = () => {
        setVisibleCount(c => c + 12);
    };

    return (
        <>
            <header className="intro-section-smaller">
                <h1>Cocktail Counter</h1>
            </header>

            <main className="main-catalog-page">

                <section className="searchbar-filterbox">
                    <div className="searchbar">
                    <p>zoek</p>
                    <input type="text" />
                    </div>
                    <details>
                        <summary>
                            filter
                        </summary>
                        <ul>
                            <li><input type="checkbox" id="glass" name="glass" value="cocktail-glass"/>
                                <label htmlFor="glass">cocktail glass</label></li>
                            <li><input type="checkbox" id="non-alcoholic" name="non-alcoholic" value="non-alcoholic"/>
                                <label htmlFor="non-alcoholic">non-alcoholic</label></li>
                            <li><input type="checkbox" id="ordinary-drink" name="ordinary-drink" value="ordinary-drink"/>
                                <label htmlFor="ordinary-drink">ordinary-drink</label></li>
                        </ul>
                    </details>
                </section>

                <section className="container-cocktails">
                    {shown.map((drink) => (
                        <div className="items" key={drink.idDrink}>
                            <h3>{drink.strDrink}</h3>
                            <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                        </div>
                    ))}
                </section>

                {visibleCount < allCocktails.length && (
                    <button onClick={loadMore}>
                        Load 12 more
                    </button>
                )}

            </main>
        </>
    );
}

export default CocktailCatalogPage;