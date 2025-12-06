import './RandomCocktail.css'
import cocktailshaker from '/src/assets/cocktail-shaker.png'
import {useState} from "react";
import axios from 'axios';

function RandomCocktail() {
    const [randomCocktail, setRandomCocktail] = useState(null);

    async function fetchRandomCocktail() {
        try {
            const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            setRandomCocktail(res.data.drinks[0]);
        } catch (e) {
            console.error(e);
        }
    }

    return (
            <button className="random-button" onClick={fetchRandomCocktail}>
                <h2>{randomCocktail ? randomCocktail.strDrink : "Shake Me!"}</h2>
                <div className="crop-box">
                    <img className={randomCocktail ? "cocktail-img" : "default-img"}
                         src={randomCocktail ? randomCocktail.strDrinkThumb : cocktailshaker}
                         alt={randomCocktail ? randomCocktail.strDrink : "filler-image"}
                    />
                </div>
            </button>
    )
}

export default RandomCocktail