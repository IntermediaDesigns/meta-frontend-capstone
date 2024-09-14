import { useState, useEffect } from "react";
import "./bookingform.css";
import { fetchAPI, submitAPI } from "../api";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize times for today's date when the component mounts
    const today = new Date().toISOString().split('T')[0];
    initializeTimes(today);
  }, []);

  const initializeTimes = async (date) => {
    setIsLoading(true);
    try {
      const times = await fetchAPI(new Date(date));
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error initializing times:", error);
      setAvailableTimes(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    }
    setIsLoading(false);
  };

  const updateTimes = async (date) => {
    setIsLoading(true);
    try {
      const times = await fetchAPI(new Date(date));
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error updating times:", error);
      setAvailableTimes(["17:00", "18:00", "19:00", "20:00", "21:00"]);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "date") {
      updateTimes(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await submitAPI(formData);
      if (result) {
        console.log("Reservation submitted successfully");
        // Reset form or navigate to a confirmation page
        setFormData({
          date: "",
          time: "",
          guests: "",
          occasion: "",
        });
      } else {
        console.log("Failed to submit reservation");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="booking-form-container">
      <h2 className="form-title">Book a Table</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="date">Choose date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Choose time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            disabled={isLoading}
          >
            <option value="">Select a time</option>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Number of guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="occasion">Occasion: (Optional)</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Wedding">Wedding</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn1" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit Reservation"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
