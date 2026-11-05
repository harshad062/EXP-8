import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  password: "",
  age: "",
  mobile: "",
  gender: "",
  state: "",
};

const states = [
  "Andhra Pradesh", "Karnataka", "Kerala", "Maharashtra",
  "Delhi", "Tamil Nadu", "Telangana", "West Bengal",
];

// Returns an error message for a field, or "" when the value is valid
function validate(field, value) {
  const v = value.trim();
  switch (field) {
    case "name":
      if (!v) return "Full name is required.";
      if (!/^[A-Za-z ]+$/.test(v)) return "Name must contain letters and spaces only.";
      return "";
    case "email":
      if (!v) return "Email address is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "Enter a valid email address.";
      return "";
    case "password":
      if (!value) return "Password is required.";
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value))
        return "Use uppercase, lowercase, a number and at least 8 characters.";
      return "";
    case "age":
      if (!v) return "Age is required.";
      if (!/^\d+$/.test(v) || Number(v) < 18 || Number(v) > 30)
        return "Age must be between 18 and 30.";
      return "";
    case "mobile":
      if (!v) return "Mobile number is required.";
      if (!/^\d{10}$/.test(v)) return "Enter exactly 10 digits.";
      return "";
    case "gender":
      return v ? "" : "Please select your gender.";
    case "state":
      return v ? "" : "Please select your state.";
    default:
      return "";
  }
}

function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [success, setSuccess] = useState(false);

  const errors = {};
  Object.keys(initialForm).forEach((f) => {
    errors[f] = validate(f, form[f]);
  });
  const isValid = Object.values(errors).every((e) => e === "");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setTouched({ ...touched, [name]: true });
    setSuccess(false);
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setSuccess(true);
    setForm(initialForm);
    setTouched({});
  };

  const fieldClass = (f) =>
    touched[f] ? (errors[f] ? "field invalid" : "field valid") : "field";

  const renderError = (f) =>
    touched[f] && errors[f] ? <small className="error">{errors[f]}</small> : null;

  return (
    <form className="card form-card" onSubmit={handleSubmit} noValidate>
      <h2>Traveller Registration</h2>
      <p className="subtitle">Join TourMate for curated trips and trusted local guides</p>

      <div className={fieldClass("name")}>
        <label htmlFor="name">Full Name *</label>
        <input id="name" name="name" value={form.name}
          onChange={handleChange} onBlur={handleBlur} placeholder="Enter your full name" />
        {renderError("name")}
      </div>

      <div className="row">
        <div className={fieldClass("email")}>
          <label htmlFor="email">Email Address *</label>
          <input id="email" name="email" value={form.email}
            onChange={handleChange} onBlur={handleBlur} placeholder="you@example.com" />
          {renderError("email")}
        </div>
        <div className={fieldClass("password")}>
          <label htmlFor="password">Password *</label>
          <input id="password" type="password" name="password" value={form.password}
            onChange={handleChange} onBlur={handleBlur} placeholder="Minimum 8 characters" />
          {renderError("password")}
        </div>
      </div>

      <div className="row">
        <div className={fieldClass("age")}>
          <label htmlFor="age">Age *</label>
          <input id="age" name="age" value={form.age}
            onChange={handleChange} onBlur={handleBlur} placeholder="18 - 30" />
          {renderError("age")}
        </div>
        <div className={fieldClass("mobile")}>
          <label htmlFor="mobile">Mobile Number *</label>
          <input id="mobile" name="mobile" value={form.mobile}
            onChange={handleChange} onBlur={handleBlur} placeholder="10-digit mobile number" />
          {renderError("mobile")}
        </div>
      </div>

      <div className="row">
        <div className={fieldClass("gender")}>
          <label htmlFor="gender">Gender *</label>
          <select id="gender" name="gender" value={form.gender}
            onChange={handleChange} onBlur={handleBlur}>
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          {renderError("gender")}
        </div>
        <div className={fieldClass("state")}>
          <label htmlFor="state">State *</label>
          <select id="state" name="state" value={form.state}
            onChange={handleChange} onBlur={handleBlur}>
            <option value="">Select state</option>
            {states.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {renderError("state")}
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={!isValid}>
        Submit Registration
      </button>

      {success && (
        <div className="success">
          Registration completed successfully! Welcome to the TourMate community.
        </div>
      )}
    </form>
  );
}

export default RegistrationForm;
