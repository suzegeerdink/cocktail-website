import './LoginPage.css'

function LoginPage() {
    return (
        <div className="login-page">
            <header className="intro-section">
                <h1>Cocktail Counter</h1>
            </header>
            <main>
                <form className="login-form">
                    <p>Inloggen</p>
                    <section className="login-details">
                        <span><label htmlFor="email">email:</label><input placeholder="type email" type="text" id="email" name="email"/></span>
                        <span><label htmlFor="password">password:</label><input placeholder="type password" type="text" id="password" name="password"/></span>
                    </section>
                    <button>Inloggen</button>
                </form>
            </main>
        </div>
    )
}

export default LoginPage