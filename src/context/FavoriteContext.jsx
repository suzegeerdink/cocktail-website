import {createContext, useState} from "react";

export const FavoriteContext = createContext();

export function FavoriteProvider({children}) {
    const [favoriteCocktails, setFavoriteCocktails] = useState([]);

    function addFavorite(cocktail) {
        const currentFavorites = favoriteCocktails;

        let isAlreadyFavorite = false;
        for (let i = 0; i < currentFavorites.length; i++) {
            if (currentFavorites[i].idDrink === cocktail.idDrink) {
                isAlreadyFavorite = true;
                break;
            }
        }

        if (!isAlreadyFavorite) {
            const updatedFavorites = [...currentFavorites, cocktail];
            setFavoriteCocktails(updatedFavorites);
        }
    }

    function removeFavorite(idDrink) {
        const currentFavorites = favoriteCocktails;

        const updatedFavorites = [];
        for (let i = 0; i < currentFavorites.length; i++) {
            if (currentFavorites[i].idDrink !== idDrink) {
                updatedFavorites.push(currentFavorites[i]);
            }
        }
        setFavoriteCocktails(updatedFavorites);
    }

    return (
        <FavoriteContext.Provider value={{ favoriteCocktails, addFavorite, removeFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}