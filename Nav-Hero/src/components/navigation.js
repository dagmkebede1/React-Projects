import React from "react";
import "./nav.css";

const Navigation = () => {
  return (
    <>
      <header className="nav-container">
        <div className="nav">
          <div className="nav-logo">
            <h1>
              Holistic <span>Health</span>
            </h1>
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
            </ul>
          </div>
          <div className="nav-toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
