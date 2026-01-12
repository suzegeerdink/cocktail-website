import './RegisterPage.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {isValidPassword} from "../../helpers/isValidPassword.js";


function RegisterPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [error, setError] = useState("");

    const passwordIsValid = isValidPassword(password);


    async function handleRegister(e) {
        e.preventDefault();
        setError("");

        if (!passwordIsValid) {
            setError("Wachtwoord moet minimaal 8 tekens bevatten en 1 cijfer.");
            return;
        }

        try {
            const response = await axios.post("/api/users", {email, password, roles: ["user"]},
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
            navigate("/login-page");

        } catch (error) {
            setError("Registratie mislukt. Controleer je gegevens.");
            console.log(error);
        }
    }

    return (
        <div className="register-page">
            <header className="intro-section">
                <h1>Cocktail Counter</h1>
            </header>
            <main>
                <form className="register-form" onSubmit={handleRegister}>
                    <p className="form-title">Register</p>
                    <section className="register-details">

                        <span><label htmlFor="email">email:</label>
                            <input placeholder="type email"
                                   type="email"
                                   id="email"
                                   name="email"
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}
                                   required/></span>
                        <span><label htmlFor="password">password:</label>
                            <input placeholder="type password"
                                   type="password"
                                   id="password"
                                   name="password"
                                   value={password}
                                   onChange={e => {
                                       setPassword(e.target.value);
                                       setPasswordTouched(true);
                                   }}
                                   className={
                                       passwordTouched && !passwordIsValid && password.length > 0 ? "invalid" : ""
                                   }
                                   required/></span>
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
                                ? "Please, enter a valid password."
                                : passwordTouched && !passwordIsValid
                                    ? "At least 8 characters and 1 digit."
                                    : ""}
                        </p>
                    </section>
                    {error && <p className="error register-error">{error}</p>}
                    <div className="button-row">
                        <button type="submit">Register</button>
                        <button
                            type="button"
                            onClick={() => navigate("/login-page")}>
                            Login instead
                        </button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default RegisterPage