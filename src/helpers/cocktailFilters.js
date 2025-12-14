/* Helpersfunction filters */
export function matchesSearch(drink, searchCocktail) {
    return drink.strDrink.toLowerCase().includes(searchCocktail.toLowerCase());
}

export function matchesGlass(drink, filters) {
    return !filters.glass || drink.strGlass === "Cocktail glass";
}

export function matchesNonAlcoholic(drink, filters) {
    return !filters.nonAlcoholic || drink.strAlcoholic === "Non alcoholic";
}

export function matchesOrdinary(drink, filters) {
    return !filters.ordinaryDrink || drink.strCategory === "Ordinary Drink";
}

