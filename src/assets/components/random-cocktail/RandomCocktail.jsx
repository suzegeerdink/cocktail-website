import './RandomCocktail.css'

function RandomCocktail() {
    return (
        <>
            <button className="random-button">
            <h2>Shake Me!</h2>
                <div className="crop-box">
            <img src="src/assets/cocktail-shaker.png" alt="filler-image"/>
                </div>
            </button>
        </>
    )
}

export default RandomCocktail