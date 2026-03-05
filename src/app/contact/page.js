export default function Contact() {
  return (
    <div className="contact-container">

      {/* HERO SECTION */}
      <div className="contact-hero">
        <h1>Contact MyShop</h1>
        <p>Have questions? We are here to help you anytime.</p>
      </div>

      {/* CONTACT GRID */}
      <div className="contact-grid">

        {/* CONTACT FORM */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form className="form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Subject" required />

            <textarea
              placeholder="Write your message..."
              rows="5"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* CONTACT DETAILS */}
        <div className="contact-details">

          <h2>Contact Information</h2>

          <div className="contact-item">
            <h4>📧 Email</h4>
            <p>support@myshop.com</p>
          </div>

          <div className="contact-item">
            <h4>📞 Phone</h4>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-item">
            <h4>📍 Address</h4>
            <p>Calicut, Kerala, India</p>
          </div>

          <div className="contact-item">
            <h4>⏰ Business Hours</h4>
            <p>Monday – Friday: 9 AM – 6 PM</p>
            <p>Saturday: 10 AM – 4 PM</p>
            <p>Sunday: Closed</p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="contact-social">
            <h4>Follow Us</h4>
            <p>🌐 Facebook | 📸 Instagram | 🐦 Twitter</p>
          </div>

        </div>
      </div>

      {/* MAP SECTION */}
      <div className="contact-map">
        <h2>Our Location</h2>

        <iframe
          src="https://maps.google.com/maps?q=calicut%20kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
}