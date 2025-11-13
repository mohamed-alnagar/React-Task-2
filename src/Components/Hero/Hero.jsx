
import "./Hero.css";
import heroImage from "../../assets/hero.png";

function Hero () {
    return (
        <section className="hero">
            <div className="hero-content">
                    <h1 className="hero-title">Welcome to My Portfolio</h1>
                    <p className="hero-subtitle">Frontend Developer & Designer</p>
                    <div className="hero-butons">
                    <button className="hero-btn">Contact Us</button>
                    <button className="about-btn">About</button>
                </div>

            </div>
            <div className="hero-image-container">
                <img src={heroImage} alt="Hero" className="hero-image" />
            </div>
        </section>

    )
}
export default Hero ;