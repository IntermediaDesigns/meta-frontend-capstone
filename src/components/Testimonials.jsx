import './testimonials.css';
function Testimonials() {
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonialContainer">
        <div className="testimonialBox">
          <img src="/images/stars.png" alt="" />
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
          <h3>~ John Doe</h3>
        </div>
        <div className="testimonialBox">
          <img src="/images/stars.png" alt="" />
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
          <h3>~ John Doe</h3>
        </div>
        <div className="testimonialBox">
          <img src="/images/stars.png" alt="" />
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          </p>
          <h3>~ John Doe</h3>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
