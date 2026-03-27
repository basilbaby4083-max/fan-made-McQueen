import ProfileUser from "./assets/Logo.png";
import "./Nav.css";
import { useNavigate, Link } from "react-router-dom";
import HeadinLogo from "./assets/McQueen logo.png";
// import MyVideo from "../videos/mcQueen.mp4";
import MainImg from "./assets/mcQueen.jpg"

export default function Nav() {
  const navigate = useNavigate();

  return (
    <div className="main-container-nav">
      <div className="overlay"></div>

      <nav className="container-nav">
        <div className="user_container">
          <img src={ProfileUser} alt="ProfileUser" />
        </div>

        <div className="heading-img">
          <img src={HeadinLogo} alt="HeadinLogo" />
        </div>
        <div className="nav-links">

          <Link to="/About">About Creator</Link>
 
        </div>
      </nav>

      <div className="hero-section">
        <p className="mini-title">Fan Made Website</p>
        <h2>Speed. Style. Legend.</h2>
        <p className="hero-text">
          Welcome to the world of Mc Queen — a stylish fan-made website with
          racing vibes, bold typography, and cinematic animation.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/explore")}>Explore</button>
          <button onClick={() => navigate("/gallery")} className="btn-outline">Gallery</button>
        </div>
      </div>
      <div>
        <div className="caption">

        </div>
 <img src={MainImg} alt="MainImg" className="bg-img" />
      </div>
    </div>
  );
}
