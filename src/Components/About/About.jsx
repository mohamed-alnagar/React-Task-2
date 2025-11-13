
import heroImg from "../../assets/hero.png";
import "../About/About.css";

function About (){
    return (
        <section className="about">
            <div className="about-img">
        <img src={heroImg} alt="About Us" />
      </div>
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum
          consequuntur repellat dolor soluta aliquid laborum eius corporis tempore.
        </p>
        <button className="btn-blue">Read More</button>
      </div>
        </section>

    )
}

export default About;