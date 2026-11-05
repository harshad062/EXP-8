import { useState } from "react";

const interests = ["Heritage Tours", "Eco Tourism", "Adventure Travel", "Food Trails", "Travel Photography"];

function performance(cgpa) {
  const g = Number(cgpa);
  if (g >= 9) return "Outstanding";
  if (g >= 8) return "Excellent";
  if (g >= 7) return "Good";
  return "Needs Improvement";
}

function StudentDetails() {
  const [student, setStudent] = useState({
    name: "Sample Student",
    regNo: "URK24CS1071",
    college: "Karunya Institute of Technology and Sciences",
    year: "Year 3",
    cgpa: "9.2",
    interest: "Heritage Tours",
  });

  const handleChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const initials = student.name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase())
    .slice(0, 2)
    .join("") || "?";

  return (
    <section className="page">
      <h1 className="section-title">Tourism Internship - Student Details</h1>
      <p className="section-sub">Edit the details on the left, the profile card updates instantly</p>

      <div className="student-grid">
        <div className="card form-card">
          <h3>Edit Student Information</h3>
          <div className="field">
            <label htmlFor="s-name">Student Name</label>
            <input id="s-name" name="name" value={student.name} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="s-reg">Register Number</label>
            <input id="s-reg" name="regNo" value={student.regNo} onChange={handleChange} />
          </div>
          <div className="field">
            <label htmlFor="s-col">College</label>
            <input id="s-col" name="college" value={student.college} onChange={handleChange} />
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="s-year">Year of Study</label>
              <select id="s-year" name="year" value={student.year} onChange={handleChange}>
                <option>Year 1</option>
                <option>Year 2</option>
                <option>Year 3</option>
                <option>Year 4</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="s-cgpa">CGPA</label>
              <input id="s-cgpa" type="number" min="0" max="10" step="0.1"
                name="cgpa" value={student.cgpa} onChange={handleChange} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="s-int">Area of Interest</label>
            <select id="s-int" name="interest" value={student.interest} onChange={handleChange}>
              {interests.map((i) => <option key={i}>{i}</option>)}
            </select>
          </div>
        </div>

        <div className="card profile">
          <div className="avatar big">{initials}</div>
          <h3>{student.name || "Unnamed Student"}</h3>
          <p className="reg">{student.regNo}</p>
          <dl>
            <dt>College</dt><dd>{student.college}</dd>
            <dt>Year</dt><dd>{student.year}</dd>
            <dt>Interest</dt><dd>{student.interest}</dd>
            <dt>CGPA</dt><dd>{student.cgpa}</dd>
            <dt>Performance</dt>
            <dd><span className="badge">{performance(student.cgpa)}</span></dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default StudentDetails;
