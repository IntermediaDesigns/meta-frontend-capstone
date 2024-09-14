import BookingForm from "../components/BookingForm";
import "./styles/Reservations.css";

const Reservations = () => {
  return (
    <section className="reservations">
      <div className="reservationBanner">
        <h1>Reservations</h1>
        <p>
          We look forward to welcoming you to Little Lemon! Please fill out the
          form below to make a reservation.
        </p>
      </div>
      <BookingForm />
    </section>
  );
};

export default Reservations;
