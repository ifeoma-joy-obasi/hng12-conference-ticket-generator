import React from "react";
import "./header.css";

import Logo from "../../assets/icons/ticz.svg";
import ThumbIcon from "../../assets/icons/thumb.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="left-section">
        <img src={ThumbIcon} alt="Thumb Icon" className="thumb-icon" /> 
        <div className="logo">
        <img src={Logo} alt="Ticz Logo" />
        </div>
      </div>

        <nav className="nav">
          <a href="#" className="nav-link active">Events</a>
          <a href="#" className="nav-link">My Tickets</a>
          <a href="#" className="nav-link">About Project</a>
        </nav>
        <button className="ticket-button">
          MY TICKETS <span className="arrow">→</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
