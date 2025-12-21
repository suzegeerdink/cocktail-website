import './ErrorPage.css'
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <header className="intro-section-smaller">
                <h1>Cocktail Counter</h1>
            </header>
            <div className="error-page">
                <h2>Oops, couldn't find the page...</h2>
                <p><Link to="/" className="error-button-link">Take me back to the homepage!</Link></p>
            </div>
        </>
    )
}

export default ErrorPage