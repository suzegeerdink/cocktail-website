import './LoginPage.css'
import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {UserContext} from "../../context/UserContext";
import {isValidPassword} from "../../helpers/isValidPassword.js";

function LoginPage() {
    const navigate = useNavigate();
    const {login} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [passwordTouched, setPasswordTouched] = useState(false);

    const passwordIsValid = isValidPassword(password);

    async function handleLogin(e) {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post(
                "https://novi-backend-api-wgsgz.ondigitalocean.app/api/login",
                {
                    email,
                    password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        'novi-education-project-id': import.meta.env.VITE_API_KEY,
                    },
                }
            );

            const {token, user} = response.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            login(token, user);

            navigate("/");
        } catch (err) {
            setError("Inloggen mislukt. Controleer je gegevens.");
        }
    }

    return (
        <div className="login-page">
            <header className="intro-section">
                <h1>Cocktail Counter</h1>
            </header>
            <main>
                <form onSubmit={handleLogin} className="login-form">
                    <p className="form-title">Inloggen</p>
                    <section className="login-details">
                        <span>
                            <label>email:</label>
                            <input placeholder="type email"
                                   type="text"
                                   id="email"
                                   name="email"
                                   onChange={(e) => setEmail(e.target.value)}
                                   required/>
                        </span>
                        <span>
                            <label>password:</label>
                            <input placeholder="type password"
                                   type="password"
                                   id="password"
                                   name="password"
                                   onChange={(e) => {
                                       setPassword(e.target.value);
                                       setPasswordTouched(true);
                                   }}
                                   className={
                                       passwordTouched && !passwordIsValid && password.length > 0 ? "invalid" : ""
                                   }
                                   required/>
                        </span>
                        <p
                            className={`error ${
                                password.length === 0
                                    ? "valid"
                                    : passwordTouched && !passwordIsValid
                                        ? "invalid"
                                        : ""
                            }`}
                        >
                            {password.length === 0
                                ? "Please enter a valid password."
                                : passwordTouched && !passwordIsValid
                                    ? "At least 8 characters and 1 digit."
                                    : ""}
                        </p>
                    </section>

                    {error && <p className="error login-error">{error}</p>}
                    <div className="button-row">
                        <button type="submit">Login</button>
                        <button
                            type="button"
                            onClick={() => navigate("/register-page")}>
                            Or Register...
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default LoginPage