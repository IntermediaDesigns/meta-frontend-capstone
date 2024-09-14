import './underconstructionmenu.css';
import { LuAlertTriangle } from "react-icons/lu";

const UnderConstructionMenu = () => {
  return (
    <div className="under-construction-page">
      <div className="content-card">
        <h1 className="restaurant-name">Little Lemon</h1>
        <div className="icon-container">
          <LuAlertTriangle color="#f4ce14" size={48} />
        </div>
        <h2 className="construction-title">Our Menu is Under Construction</h2>
        <p className="construction-message">
          We&apos;re cooking up something special! Our new menu will be available soon.
        </p>
        <div className="additional-info">
          <p>Expected completion: Coming Soon</p>
          <p>Thank you for your patience!</p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionMenu;