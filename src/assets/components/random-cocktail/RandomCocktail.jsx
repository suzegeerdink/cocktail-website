import './RandomCocktail.css'
import cocktailshaker from '/src/assets/cocktail-shaker.png'

function RandomCocktail() {
    return (
        <>
            <button className="random-button">
            <h2>Shake Me!</h2>
                <div className="crop-box">
            <img src={cocktailshaker} alt="filler-image"/>
                </div>
            </button>
        </>
    )
}

export default RandomCocktail