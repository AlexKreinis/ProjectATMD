import React from "react";
import "../../css/navbar.css";

export default function CustomerMenu() {
  return (
    <div className="dropdown">
      <a class="dropbtn">Menu</a>
      <div className="dropdown-content">
        <a>Products</a>
        <a href="/RateWorkers">Workers</a>
        <a href="/AboutMe">Personal Info</a>
        <a href="/sLocation">Our Location</a>
      </div>
    </div>
  );
}
