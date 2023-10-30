import SignUpForm from "../components/SignUpForm";
import TextTop from "../components/TextTop";
import ReturnHome from "../components/ReturnHome";

function SignUpSite() {
    return (
        <div>
            <SignUpForm titolo="Sign up"/>
            <TextTop text="Login" address="Login"/>
            <ReturnHome/>
        </div>
    )
}

export default SignUpSite
