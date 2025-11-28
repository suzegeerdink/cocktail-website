import './HighlightedCocktail.css'
import cocktailimage from '/src/assets/bloody-mary.jpg';

function HighlightedCocktail() {
    return (
        <>
            <div className="outer-container-hc">
            <h2>Name Cocktail</h2>
            <img src={cocktailimage} alt="filler-image"/>
            <p>string ingredient 1, string ingredient 2, string ingredient 3</p>
            <button>meer</button>
            </div>
        </>
    )
}

export default HighlightedCocktail