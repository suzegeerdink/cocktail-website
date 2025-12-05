import './CocktailDetailPage.css'
import cocktailimage from '/src/assets/bloody-mary.jpg';


function CocktailDetailPage() {

    return (
        <div className="detail-page">
            <header className="intro-section-smaller">
                <h1>Cocktail Counter</h1>
            </header>
            <main className="outer-container-detailpage">
                <article className="inner-container-detailpage">
                    <div className="title-and-icon">
                        <h2>Moscow Mule</h2>
                        <button className="star-button">★</button>
                    </div>
                    <section className="cocktailcard-main-content">
                        <div className="image-and-recipe">
                        <img src={cocktailimage} alt="filler-image"/>
                        <section className="cocktail-text">
                            <p><strong>Ingredients:</strong> vodka, ginger beer and fresh lime juice</p>
                            <p><strong>Recipe:</strong> Combine vodka and ginger beer in a highball glass filled
                                with ice. Add lime juice. Stir gently. Garnish.</p>
                            <p><strong>Glass:</strong> Copper mug</p>
                        </section>
                        </div>
                        <div className="buttons-card">
                            <fieldset className="amount-options">
                                <input type="checkbox" id="strMeasure1" name="strMeasure1" value="amount"/>
                                <label htmlFor="strMeasure1">strMeasure1</label>
                                <input type="checkbox" id="strMeasure2" name="strMeasure2" value="amount"/>
                                <label htmlFor="strMeasure2">strMeasure2</label>
                            </fieldset>
                            <div className="action-buttons">
                                <button>add to list</button>
                                <button>back</button>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default CocktailDetailPage