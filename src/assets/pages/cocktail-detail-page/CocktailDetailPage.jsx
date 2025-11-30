import './CocktailDetailPage.css'
import cocktailimage from '/src/assets/bloody-mary.jpg';
import star from '/src/assets/star.png';


function CocktailDetailPage() {

    return (
        <>
            <div className="detail-page">
            <header className="intro-section-smaller">
                <h1>Cocktail Counter</h1>
            </header>
            <main className="outer-container-dp">
                <div className="inner-container-db">
                    <span className="title-and-icon">
                        <h2>Moscow Mule</h2>
                        <img src={star} alt="star"/>
                    </span>
                    <div className="cocktail-main-content">
                    <img src={cocktailimage} alt="filler-image"/>
                    <section className="cocktail-text">
                    <p><strong>Ingredients:</strong> vodka, ginger beer and fresh lime juice</p>
                    <p><strong>Recipe:</strong> Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish.</p>
                    <p><strong>Glass:</strong> Copper mug</p>
                    </section>
                    </div>
                    <button>back</button>
                </div>
            </main>
            </div>
        </>
    )
}

export default CocktailDetailPage