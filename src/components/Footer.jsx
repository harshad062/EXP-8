import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>TourMate</h3>
          <p>
            Your friendly local tourism guide. Discover hidden gems, trusted
            local guides and authentic experiences across Tamil Nadu.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/register">Join as Traveller</Link>
        </div>
        <div>
          <h4>Explore</h4>
          <p>Heritage Sites</p>
          <p>Beaches &amp; Islands</p>
          <p>Temples &amp; Culture</p>
          <p>Hill Stations</p>
        </div>
        <div>
          <h4>Visit Us</h4>
          <p>12, Anna Salai, Chennai - 600002</p>
          <p>+91 98765 43210</p>
          <p>hello@tourmate.in</p>
        </div>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} TourMate Local Tourism Guide. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
