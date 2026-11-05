import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password) {
      setMsg("Please enter your email and password.");
      return;
    }
    setMsg("Login successful. Happy travels!");
  };

  return (
    <section className="page narrow">
      <div className="login-wrap">
        <aside className="login-side">
          <h2>Travel Club</h2>
          <p>Save your favourite places, plan trips and unlock member-only guide offers.</p>
          <ul>
            <li>Personalised itineraries</li>
            <li>Saved places and wishlists</li>
            <li>Discounts on local guides</li>
          </ul>
        </aside>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to your account</p>
          <div className="field">
            <label htmlFor="l-email">Email</label>
            <input id="l-email" name="email" value={form.email}
              onChange={handleChange} placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="l-pass">Password</label>
            <input id="l-pass" type="password" name="password" value={form.password}
              onChange={handleChange} placeholder="Your password" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
          {msg && <p className="login-msg">{msg}</p>}
          <p className="alt">New traveller? <Link to="/register">Register here</Link></p>
        </form>
      </div>
    </section>
  );
}

export default Login;
