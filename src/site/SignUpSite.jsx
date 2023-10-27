import LoginForm from "../components/LoginForm";
import TextTop from "../components/TextTop";
import ReturnHome from "../components/ReturnHome";

function SignUpSite() {
    return (
        <div>
            <LoginForm titolo="Sign up" />
            <TextTop text="Login" address="Login"/>
            <ReturnHome/>
        </div>
    )
}

export default SignUpSite
