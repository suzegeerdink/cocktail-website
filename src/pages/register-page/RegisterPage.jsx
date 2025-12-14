import './RegisterPage.css'

function RegisterPage() {
    return (
        <div className="register-page">
            <header className="intro-section">
                <h1>Cocktail Counter</h1>
            </header>
            <main>
                <form className="register-form">
                    <p>Register</p>
                    <section className="register-details">
                        <span><label htmlFor="name">name:</label><input placeholder="type name" type="text" id="name" name="name"/></span>
                        <span><label htmlFor="email">email:</label><input placeholder="type email" type="text" id="email" name="email"/></span>
                        <span><label htmlFor="password">password:</label><input placeholder="type password" type="text" id="password" name="password"/></span>
                    </section>
                    <button>Register</button>
                </form>
            </main>
        </div>
    )
}

export default RegisterPage