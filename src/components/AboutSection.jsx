import "./aboutsection.css";

function AboutSection() {
  return (
    <section className="aboutSection" id="about">
      <div className="aboutContainer">
        <div className="aboutInfo">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally sourced menu with daily specials.
          </p>
        </div>
        <div className="aboutImgs">
          <img id="restImg" src="./images/restaurant.jpg" alt="restaurant" />
          <img id="chefImg" src="./images/chef.jpg" alt="chef" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
