import lemononly from "/images/lemononly.png";
import { BsArrowUpCircle, BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div>
          <img id="lemonOnly" src={lemononly} alt="lemon" />
        </div>
        <div className="contactContainer">
          <h3>Contact Us</h3>
          <p>
            1234 W. Diversey Parkway <br />
            Chicago, IL 60614 <br />
          </p>
          <a href="tel:+13125551212">(312) 555-1212</a>
          <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
        </div>
        <div>
          <BsArrowUpCircle
            id="upArrow1"
            size={32}
            color="#FFD43B"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </div>

      <div className="socialIconContainer">
        <a href="https://www.facebook.com/littlelemonpage">
          <BsFacebook size={24} />
        </a>
        <a href="https://www.instagram.com/littlelemonpage">
          <FaInstagramSquare size={24} />
        </a>
        <a href="https://www.twitter.com/littlelemonpage">
          <BsTwitterX size={24} />
        </a>
      </div>

      <p id="copyright">
        &copy; {new Date().getFullYear()} Little Lemon. All Rights Reserved.
      </p>
    </footer>
  );
}
