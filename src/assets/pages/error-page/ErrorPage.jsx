import './ErrorPage.css'
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <h1>ErrorPage</h1>
            <p>Take me back to the <Link to="/">homepage!</Link></p>
        </>
    )
}

export default ErrorPage