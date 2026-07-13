import { CALENDLY_URL } from '../booking';
import './BookAppointmentButton.css';

export default function BookAppointmentButton({ className = '' }: { className?: string }) {
  return (
    <div className={`book-cta ${className}`.trim()}>
      <a
        href={CALENDLY_URL}
        className="solid-btn book-cta__btn"
        onClick={(e) => {
          e.preventDefault();
          window.location.assign(CALENDLY_URL);
        }}
      >
        Book an Appointment
      </a>
    </div>
  );
}
