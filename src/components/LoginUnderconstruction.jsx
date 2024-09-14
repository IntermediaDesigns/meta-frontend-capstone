import { FaUnlockAlt, FaUser } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const LoginUnderConstruction = () => {
  return (
    <div className="under-construction-page">
      <div className="content-card">
        <h1 className="restaurant-name">Little Lemon</h1>
        <div className="icon-container">
          <FaUnlockAlt color="#f4ce14" size={48} />
        </div>
        <h2 className="construction-title">Login Coming Soon!</h2>
        <p className="construction-message">
          We&apos;re currently setting up a secure login system to enhance your Little Lemon experience.
        </p>
        <div className="features-list">
          <h3>Upcoming Features:</h3>
          <div className="list">
            <p><FaUser size={16} /> Personalized profiles</p>
            <p><IoMail size={16} /> Order history</p>
            <p><FaUnlockAlt size={16} /> Secure payments</p>
          </div>
        </div>
        <div className="additional-info">
          <p>Expected launch: Fall 2024</p>
          <p>Stay tuned for updates!</p>
        </div>
      </div>
    </div>
  );
};

export default LoginUnderConstruction;