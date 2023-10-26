import "../style/components/Home.css";

function Home() {
    return (
        <div className="Home">
            <h1>WELCOME!</h1>
            <div className="Home__button">
                <a href="/Login">Login</a>
                <a href="/SignUp">Sign Up</a>
            </div>
        </div>
    )
}

export default Home
