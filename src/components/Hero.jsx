import { Link } from 'react-router-dom';
import heroImg from "/images/hero.jpg";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="heroSection">
        <div className="heroInfo">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="btn1">
            <Link to="/reservations">Reserve Table</Link>
          </button>
        </div>
        <div className="heroImgSection">
          <img
            className="heroImg"
            src={heroImg}
            alt="Little Lemon restaurant ambiance"
          />
        </div>
      </div>
    </section>
  );
}
