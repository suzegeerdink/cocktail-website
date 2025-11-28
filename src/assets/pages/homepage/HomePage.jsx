import './HomePage.css'
import HighlightedCocktail from "../../components/highlighted-cocktail/HighlightedCocktail.jsx";
import RandomCocktail from "../../components/random-cocktail/RandomCocktail.jsx";

function HomePage() {
    return (
        <>
            <div className="main-homepage">
                <header className="intro-section">
                    <h1>Cocktail Counter</h1>
                </header>
                <main className="container-main-content">
                    <section className="highlighted-cocktails">
                        <HighlightedCocktail/>
                        <HighlightedCocktail/>
                        <HighlightedCocktail/>
                    </section>
                    <section>
                        <RandomCocktail/>
                    </section>
                </main>
            </div>
        </>
    )
}

export default HomePage