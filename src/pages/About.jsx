const values = [
  ["Authentic Experiences", "Every trip is shaped by people who live in the destination."],
  ["Responsible Travel", "We support local artisans, homestays and eco-friendly tours."],
  ["Spreading Joy", "Affordable itineraries so every traveller can explore more."],
];

const team = [
  ["AR", "Arun R.", "Founder"],
  ["PS", "Priya S.", "Destination Curator"],
  ["KM", "Karthik M.", "Guide Network"],
  ["DN", "Divya N.", "Traveller Support"],
];

function About() {
  return (
    <section className="page">
      <h1 className="section-title">About TourMate</h1>
      <p className="section-sub">Your partner in every travel adventure</p>
      <div className="card intro">
        TourMate is a local tourism guide started in 2018 with a simple mission:
        help visitors discover the real character of a place. We connect travellers
        with verified local guides, heritage walks, food trails and stay options
        across Tamil Nadu with honest information and friendly support.
      </div>

      <div className="grid-3 values">
        {values.map(([t, d]) => (
          <div className="card value" key={t}>
            <h3>{t}</h3>
            <p>{d}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Meet Our Team</h2>
      <div className="grid-4">
        {team.map(([ini, name, role]) => (
          <div className="card member" key={name}>
            <div className="avatar">{ini}</div>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
