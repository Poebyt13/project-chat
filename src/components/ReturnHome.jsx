import "../style/components/ReturnHome.css";
import homeSVG from "../assets/home-outline.svg";

function ReturnHome() {
    return (
        <div className='ReturnHome'>
            <a href="/">
                <p>Home</p>
                <img src={homeSVG} alt="svg_home" />
            </a>
        </div>
    )
}

export default ReturnHome
