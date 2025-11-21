import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <form className="contact-form">
        <label>Phone Number</label>
        <input type="text" placeholder="Enter your phone number" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Address</label>
        <input type="text" placeholder="Enter your address" required />

        <label>Message</label>
        <textarea placeholder="Write your message..." required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
