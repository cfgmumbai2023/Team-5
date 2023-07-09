import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Homepage.jpg";
import "../styles/Home.css";
import "../styles/Footer.css";

function Home() {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> JEET NGO </h1>
          <p> Education For All </p>
          <Link to="/menu">
            <button> Let's Educate </button>
          </Link>
        </div>
      </div>

      <div className="card1">
        
          <h2>Vision</h2>
          <p>
            The Ramakrishna Sarada Samiti is a registered society, and a
            non-government organization (NGO) working since 1968 in the slums of
            Mumbai, for the uplift in confidence and capacities, of women and
            children from these less served communities.
          </p>
        
        
          <h2>Mission</h2>
          <p>
            For the Women - Vocational training programs, financial literacy
            classes, health and hygiene camps, children’s education; Of the
            women - promotion of entrepreneurship, partnership in programs,
            economic independence, and safety; By the women –Fully
            managed by women .
          </p>
        
      </div>
    </div>
  );
}

export default Home;
