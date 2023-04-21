import React from 'react';
import logo from "../../common/image/logo.png";
import "./style.css";

function Navbar() {

  return (
    <div>
      <header className="navbar">
        <div className="nav-items-left">
            <img id="logo" src={logo} alt="logo" />
        </div>
        <div className="nav-items-right">
          <button type="button" class="btn nav-btn btn-outline-primary">Home</button>
          <button type="button" class="btn nav-btn btn-outline-primary">Employee</button>
          <button type="button" class="btn nav-btn btn-outline-primary">Services</button>
          <button type="button" class="btn nav-btn btn-outline-primary">Setting</button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
