import './CocktailCatalogPage.css';
import axios from 'axios';
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import FilterCheckbox from "../../components/FilterCheckbox.jsx";
import SearchBar from "../../components/searchbar/SearchBar.jsx";
import { matchesSearch, matchesGlass, matchesNonAlcoholic, matchesOrdinary } from "../../helpers/cocktailFilters.js";

function CocktailCatalogPage() {
    const [allCocktails, setAllCocktails] = useState([]);
    const [visibleCount, setVisibleCount] = useState(24);
    const [loading, setLoading] = useState(true);

    const [searchCocktail, setSearchCocktail] = useState("");
    const [filters, setFilters] = useState({glass: false, nonAlcoholic: false, ordinaryDrink: false});

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

    const filtered = allCocktails.filter(drink =>
        matchesSearch(drink, searchCocktail) &&
        matchesGlass(drink, filters) &&
        matchesNonAlcoholic(drink, filters) &&
        matchesOrdinary(drink, filters)
    );

    const shown = filtered.slice(0, visibleCount);
    const loadMore = () => {
        setVisibleCount(c => c + 24);
    };

    return (
        <>
            <header className="intro-section-smaller">
                <h1>Cocktail Counter</h1>
            </header>

            <main className="main-catalog-page">

                <section className="searchbar-filterbox">
                    <SearchBar
                        value={searchCocktail}
                        onChange={(e) => setSearchCocktail(e.target.value)}
                    />
                    <details>
                        <summary>
                            filter
                        </summary>
                        <ul>
                            <FilterCheckbox
                                id="glass"
                                label="cocktail glass"
                                checked={filters.glass}
                                onChange={() => setFilters({ ...filters, glass: !filters.glass })}
                            />
                            <FilterCheckbox
                                id="non-alcoholic"
                                label="non-alcoholic"
                                checked={filters.nonAlcoholic}
                                onChange={() => setFilters({ ...filters, nonAlcoholic: !filters.nonAlcoholic })}
                            />
                            <FilterCheckbox
                                id="ordinary-drink"
                                label="ordinary-drink"
                                checked={filters.ordinaryDrink}
                                onChange={() => setFilters({ ...filters, ordinaryDrink: !filters.ordinaryDrink })}
                            />
                        </ul>
                    </details>
                </section>

                <section className="container-cocktails">
                    {shown.map((drink) => (
                        <Link
                            to={`/cocktail-detail-page/${drink.idDrink}`}
                            key={drink.idDrink}
                            className="items"
                        >
                            <h3>{drink.strDrink}</h3>
                            <img src={drink.strDrinkThumb} alt={drink.strDrink}/>
                        </Link>
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