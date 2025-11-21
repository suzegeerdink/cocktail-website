import './ErrorPage.css'
import {Link} from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <p>ErrorPage</p>
            <p>Take me back to the <Link to="/">homepage!</Link></p>
        </>
    )
}

export default ErrorPage