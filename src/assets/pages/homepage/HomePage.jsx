import './HomePage.css'
import HighlightedCocktail from "../../components/highlighted-cocktail/HighlightedCocktail.jsx";
import RandomCocktail from "../../components/random-cocktail/RandomCocktail.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

function HomePage() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function fetchHighlighted() {
            try {
                const names = ["margarita", "mojito", "moscow mule"];
                const cocktailList = [];

                for (let name of names) {
                    const result = await axios.get(
                        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);

                    if (result.data.drinks && result.data.drinks.length > 0) {
                        cocktailList.push(result.data.drinks[0]);
                    }
                }

                setDrinks(cocktailList);
            } catch (e) {
                console.error(e);
            }
        }

        fetchHighlighted();
    }, []);

    return (
            <div className="main-homepage">
                <header className="intro-section">
                    <h1>Cocktail Counter</h1>
                </header>
                <main className="container-main-content">
                    <section className="highlighted-cocktails">
                        {drinks.map((drink) => (
                            <HighlightedCocktail key={drink.idDrink} drink={drink} />
                        ))}
                    </section>
                    <section>
                        <RandomCocktail/>
                    </section>
                </main>
            </div>
    )
}

export default HomePage