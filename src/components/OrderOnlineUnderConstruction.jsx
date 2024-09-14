import "./orderonlineundercontruction.css";
import { LuConstruction, LuClock } from "react-icons/lu";

const OrderOnlineUnderConstruction = () => {
  return (
    <div className="under-construction-page">
      <div className="content-card">
        <h1 className="restaurant-name">Little Lemon</h1>
        <div className="icon-container">
          <LuConstruction color="#f4ce14" size={48} />
        </div>
        <h2 className="construction-title">Online Ordering Coming Soon!</h2>
        <p className="construction-message">
          We&apos;re working hard to bring you a seamless online ordering experience. Stay tuned!
        </p>
        <div className="additional-info">
          <div className="info-item">
            <LuClock size={20} />
            <p>Expected launch: Summer 2024</p>
          </div>
          <p>In the meantime, please call us to place your order.</p>
          <p className="phone-number">📞 (312) 555-1212</p>
        </div>
      </div>
    </div>
  );
};

export default OrderOnlineUnderConstruction;