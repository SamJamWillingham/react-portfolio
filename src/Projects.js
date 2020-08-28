import React from "react";
import "./App.css";

export default function Social() {
  return (
    <div className="Projects">
      <h3>projects</h3>
      <a
        href="https://gifted-tereshkova-4aa25e.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="weatherApp">Vanilla JS Weather App</button>
      </a>
      <a
        href="https://ecstatic-leakey-e874b0.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="tarot">Tarot Card Drawer</button>
      </a>
    </div>
  );
}
