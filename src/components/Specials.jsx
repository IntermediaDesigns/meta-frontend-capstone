import "./specials.css";

function Specials() {
  return (
    <section className="specials">
      <h1 className="specialsTitle">This weeks specials!</h1>
      <div className="specialsContainer">
        <div className="specialBox">
          <div className="specialImg">
            <img src="/images/greeksalad.jpg" alt="" />
          </div>
          <div className="foodHeader">
            <h2>Greek Salad</h2>
            <p>$ 12.99</p>
          </div>
          <div className="foodInfo">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives, and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </div>
          <div className="orderHeader">
            <p>Order a delivery</p>
            <img src="/images/DeliveryIcon.jpg" alt="" />
          </div>
        </div>
        <div className="specialBox">
          <div className="specialImg">
            <img src="/images/greeksalad.jpg" alt="" />
          </div>
          <div className="foodHeader">
            <h2>Greek Salad</h2>
            <p>$ 12.99</p>
          </div>
          <div className="foodInfo">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives, and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </div>
          <div className="orderHeader">
            <p>Order a delivery</p>
            <img src="/images/DeliveryIcon.jpg" alt="" />
          </div>
        </div>
        <div className="specialBox">
          <div className="specialImg">
            <img src="/images/greeksalad.jpg" alt="" />
          </div>
          <div className="foodHeader">
            <h2>Greek Salad</h2>
            <p>$ 12.99</p>
          </div>
          <div className="foodInfo">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives, and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
          </div>
          <div className="orderHeader">
            <p>Order a delivery</p>
            <img src="/images/DeliveryIcon.jpg" alt="" />
          </div>
        </div>
      </div>
      <button className="btn1" id="specialsBtn">Order Online</button>
      
    </section>
  );
}

export default Specials;
