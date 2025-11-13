import "../Footer/Footer.css";

import feed1 from "../../assets/f1.png";
import feed2 from "../../assets/f2.png";
import feed3 from "../../assets/f3.png";
import feed4 from "../../assets/f4.png";
import feed5 from "../../assets/f5.png";
import feed6 from "../../assets/f6.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>Home</li>
          <li>Furniture</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <p>📞 +01 1234567890</p>
        <p>✉️ demo@gmail.com</p>
        <p>📍 Location</p>
      </div>

      <div className="footer-Feeds">
        <h3>Feeds</h3>
        <div className="feeds-container">
          <img src={feed1} alt="Feed 1" />
          <img src={feed2} alt="Feed 2" />
          <img src={feed3} alt="Feed 3" />
          <img src={feed4} alt="Feed 4" />
          <img src={feed5} alt="Feed 5" />
          <img src={feed6} alt="Feed 6" />
        </div>
      </div>

      <div className="footer-section">
        <h3>SIGN UP to OUR Newsletter</h3>
        <input type="email" placeholder="Enter your email" />
        <button className="btn blue">Subscribe</button>
      </div>
    </footer>
  );
}