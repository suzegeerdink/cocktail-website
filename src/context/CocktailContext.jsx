import { createContext, useState } from "react";

export const CocktailContext = createContext();

export function CocktailProvider( { children } ) {
    const [todaysCocktails, setTodaysCocktails] = useState( [] );

    const addCocktail = (cocktail) => {
        setTodaysCocktails((previousCocktails) => {
            const updatedCocktails = [...previousCocktails];
            updatedCocktails.push({ ...cocktail });
            return updatedCocktails;
        });
    };

    const removeCocktail = (indexToRemove) => {
        setTodaysCocktails((previousCocktails) => {
            return previousCocktails.filter((_, index) => index !== indexToRemove);
        });
    };

    return (
        <CocktailContext.Provider value={{ todaysCocktails, addCocktail, removeCocktail  }}>
            {children}
        </CocktailContext.Provider>
    );
}