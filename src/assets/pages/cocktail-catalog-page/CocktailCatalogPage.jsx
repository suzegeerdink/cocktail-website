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

                <section className="searchbar">
                    <p>zoek</p>
                    <input type="text" />
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