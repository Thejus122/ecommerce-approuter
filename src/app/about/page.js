export default function About() {
  return (
    <div className="about-container">

      {/* HERO */}
      <div className="about-hero">
        <h1>About MyShop</h1>
        <p>Your trusted online shopping partner</p>
      </div>

      {/* INTRO */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          MyShop is a modern eCommerce platform dedicated to providing
          high-quality products at affordable prices. We focus on
          customer satisfaction, fast delivery, and secure shopping.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-grid">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To make online shopping simple, affordable, and accessible
            for everyone.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To become a leading global eCommerce platform known for
            trust and innovation.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <ul className="about-list">
          <li>✔ High-quality products</li>
          <li>✔ Fast & secure delivery</li>
          <li>✔ Easy returns</li>
          <li>✔ 24/7 customer support</li>
        </ul>
      </section>

    </div>
  );
}