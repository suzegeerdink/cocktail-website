import './HomePage.css'
import HighlightedCocktail from "../../components/highlighted-cocktail/HighlightedCocktail.jsx";
import RandomCocktail from "../../components/random-cocktail/RandomCocktail.jsx";

function HomePage() {
    return (
        <>
            <main>
                <section className="intro-section">
                    <h1>Cocktail Counter</h1>
                </section>
                <div className="container-main-content">
                    <section className="highlighted-cocktails">
                        <HighlightedCocktail/>
                        <HighlightedCocktail/>
                        <HighlightedCocktail/>
                    </section>
                    <section>
                        <RandomCocktail/>
                    </section>
                </div>
            </main>
        </>
    )
}

export default HomePage