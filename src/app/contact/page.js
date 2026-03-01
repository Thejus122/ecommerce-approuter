export default function Contact() {
  return (
    <div className="contact-container">

      {/* HERO */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you</p>
      </div>

      <div className="contact-grid">

        {/* CONTACT FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* CONTACT DETAILS */}
        <div className="contact-details">
          <h2>Get in Touch</h2>

          <p><strong>Email:</strong> support@myshop.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> Calicut, Kerala, India</p>

          <h3>Business Hours</h3>
          <p>Monday - Friday: 9 AM - 6 PM</p>
          <p>Saturday: 10 AM - 4 PM</p>
          <p>Sunday: Closed</p>
        </div>

      </div>

      
      

    </div>
  );
}