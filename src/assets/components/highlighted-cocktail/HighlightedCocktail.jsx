import './HighlightedCocktail.css'

function HighlightedCocktail({ drink }) {
    function getIngredients(drink) {
        const list = [];
        for (let i = 1; i <= 15; i++) {
            const ing = drink[`strIngredient${i}`];
            if (!ing) break;
            list.push(ing);
            if (list.length === 3) break;
        }
        return list;
    }

    const ingredients = getIngredients(drink);

    return (
        <div className="outer-container-highlighted-cocktail">
            <h2>{drink.strDrink}</h2>
            <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
            />

            <p>{ingredients.join(", ")}</p>
            <button>meer</button>
        </div>
    )
}

export default HighlightedCocktail