export function isCocktailFavorite(favoriteCocktails, cocktail) {
    if (!cocktail) return false;
    for (let i = 0; i < favoriteCocktails.length; i++) {
        if (favoriteCocktails[i].idDrink === cocktail.idDrink) return true;
    }
    return false;
}