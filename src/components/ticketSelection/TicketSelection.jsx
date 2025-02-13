import React, { useState } from "react";
import "./ticketSelection.css";

const TicketSelection = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const ticketOptions = [
    { type: "Free", price: "$0", access: "REGULAR ACCESS", available: "20/52" },
    { type: "$150", price: "$150", access: "VIP ACCESS", available: "20/52" },
    { type: "$150", price: "$150", access: "VIP ACCESS", available: "20/52" }
  ];

  return (
    <div className="ticket-selection-container">
      <div className="ticket-selection-card">
        <h2 className="ticket-selection-title">Ticket Selection</h2>
        <div className="progress-bar"></div>
        <div className="event-info">
          <h3 className="event-title">Techember Fest "25"</h3>
          <p className="event-details">
            Join us for an unforgettable experience at [Event Name]! Secure your spot now.
          </p>
          <p className="event-date">📍 [Event Location] || March 15, 2025 | 7:00 PM</p>
        </div>
        <div className="ticket-options">
          {ticketOptions.map((ticket, index) => (
            <div
              key={index}
              className={`ticket-option ${selectedTicket === index ? "selected" : ""}`}
              onClick={() => setSelectedTicket(index)}
            >
              <span className="ticket-price">{ticket.type}</span>
              <span className="ticket-access">{ticket.access}</span>
              <span className="ticket-availability">{ticket.available}</span>
            </div>
          ))}
        </div>
        <div className="select-tickets">
          <label>Number of Tickets</label>
          <select value={ticketQuantity} onChange={(e) => setTicketQuantity(e.target.value)}>
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>{num + 1}</option>
            ))}
          </select>
        </div>
        <div className="action-buttons">
          <button className="cancel-button">Cancel</button>
          <button className="next-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;
