import "./testimonials.css";
function Testimonials() {
  return (
    <section className="testimonials">
      <h1>Testimonials</h1>
      <div className="testimonialContainer">
        <div className="testimonialBox">
          <img src="/images/stars.png" alt="" />
          <p>
            “Little Lemon&rsquo;s authentic Mediterranean cuisine tantalized my
            taste buds with its vibrant flavors and fresh ingredients. The cozy
            atmosphere and friendly staff made my dining experience truly
            memorable.”
          </p>
          <h3>~ Jake Johnson</h3>
        </div>
        <div className="testimonialBox">
          <img src="/images/stars.png" alt="" />
          <p>
            “The atmosphere at Little Lemon is simply enchanting. The warm
            lighting, soft music, and aromatic scents create an inviting and
            intimate setting that perfectly complements the delicious food.”
          </p>
          <h3>~ Carol Sydney</h3>
        </div>
        <div className="testimonialBox">
          <img src="/images/stars.png" alt="" />
          <p>
            “More than just a meal, dining at Little Lemon is an immersive
            culinary journey. The attentive service and the chef&rsquo;s passion for
            Mediterranean flavors made my dining experience an unforgettable
            one.”
          </p>
          <h3>~ Lisa Davis</h3>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
