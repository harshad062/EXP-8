import { Link } from "react-router-dom";

const stats = [
  ["120+", "Places Covered"],
  ["8k+", "Happy Travellers"],
  ["40+", "Local Guides"],
  ["4.8★", "Traveller Rating"],
];

const categories = [
  ["🏛️", "Heritage Sites", "Forts, palaces and ancient monuments"],
  ["🏖️", "Beaches", "Sun, sand and sunrise walks"],
  ["🛕", "Temples", "Architecture and living traditions"],
  ["⛰️", "Hill Stations", "Cool escapes and tea estates"],
  ["🍛", "Food Trails", "Street food and local kitchens"],
  ["🌿", "Nature & Wildlife", "Backwaters, forests and sanctuaries"],
];

const spots = [
  ["🛕", "Mahabalipuram", "Shore temples and rock-cut sculptures", "58 km from Chennai"],
  ["⛰️", "Ooty", "Tea gardens and the toy train ride", "Nilgiri Hills"],
  ["🏛️", "Thanjavur", "Great Living Chola Temples and art", "Cauvery Delta"],
];

function Home() {
  return (
    <>
      <section className="hero">
        <span className="pill">Free local guide for your first trip</span>
        <h1>Discover places <em>locals</em> love,<br />travel the <em>smart</em> way.</h1>
        <p>
          Explore handpicked destinations, food trails and cultural experiences
          with trusted local guides, all in one place.
        </p>
        <div className="hero-actions">
          <Link to="/register" className="btn btn-primary">Join as Traveller</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
        <div className="stats">
          {stats.map(([n, l]) => (
            <div key={l}><strong>{n}</strong><span>{l}</span></div>
          ))}
        </div>
      </section>

      <section className="page">
        <h2 className="section-title">Explore By Category</h2>
        <p className="section-sub">Everything a curious traveller needs, under one roof</p>
        <div className="grid-3">
          {categories.map(([icon, title, text]) => (
            <div className="card cat" key={title}>
              <span className="cat-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-sub">Most loved spots this season</p>
        <div className="grid-3">
          {spots.map(([icon, name, text, tag]) => (
            <div className="card spot" key={name}>
              <div className="spot-banner">{icon}</div>
              <div className="spot-body">
                <h3>{name}</h3>
                <p>{text}</p>
                <span className="tag">{tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
