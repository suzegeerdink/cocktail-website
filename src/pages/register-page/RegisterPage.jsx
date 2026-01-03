import './RegisterPage.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function RegisterPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleRegister(e) {
        e.preventDefault();
        setError("");

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
                    <p>Register</p>
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
                                   onChange={e => setPassword(e.target.value)}
                                   required/></span>
                    </section>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">Register</button>
                </form>
            </main>
        </div>
    )
}

export default RegisterPage