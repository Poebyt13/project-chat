import LoginForm from "../components/LoginForm";
import TextTop from "../components/TextTop";
import ReturnHome from "../components/ReturnHome";

function LoginSite() {
    return (
        <div>
            <LoginForm titolo="Login" />
            <TextTop text="Sign up" address="SignUp" />
            <ReturnHome/>
        </div>
    )
}

export default LoginSite
