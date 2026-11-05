import { useState } from "react";

const empty = { name: "", email: "", type: "", message: "" };

function Contact() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const ready = Object.values(form).every((v) => v.trim() !== "");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!ready) return;
    setSent(true);
    setForm(empty);
  };

  return (
    <section className="page">
      <h1 className="section-title">Contact Us</h1>
      <p className="section-sub">We usually respond within 24 hours</p>
      <div className="contact-grid">
        <aside className="card info">
          <h3>Office Details</h3>
          <h5>Address</h5>
          <p>12, Anna Salai, Chennai - 600002</p>
          <h5>Phone</h5>
          <p>+91 98765 43210</p>
          <h5>Email</h5>
          <p>hello@tourmate.in</p>
          <h5>Hours</h5>
          <p>Mon - Sat, 9:00 AM - 7:00 PM</p>
        </aside>

        <form className="card form-card" onSubmit={handleSubmit}>
          <h3>Send an Enquiry</h3>
          <div className="field">
            <label htmlFor="c-name">Your Name</label>
            <input id="c-name" name="name" value={form.name}
              onChange={handleChange} placeholder="Full name" />
          </div>
          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input id="c-email" type="email" name="email" value={form.email}
              onChange={handleChange} placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="c-type">Enquiry Type</label>
            <select id="c-type" name="type" value={form.type} onChange={handleChange}>
              <option value="">Select a category</option>
              <option>Trip Planning</option>
              <option>Hire a Local Guide</option>
              <option>Group Tours</option>
              <option>Feedback</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="c-msg">Message</label>
            <textarea id="c-msg" name="message" rows="4" value={form.message}
              onChange={handleChange} placeholder="Tell us about your travel plans" />
          </div>
          <button type="submit" className="btn btn-primary btn-block" disabled={!ready}>
            Send Message
          </button>
          {sent && <div className="success">Thanks! Our travel desk will get back to you soon.</div>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
