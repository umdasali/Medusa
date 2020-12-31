import React from "react";

function Navbar() {

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
    
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }

  return (
    <div className="mt-3 mb-3">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Our Work</a>
          </li>
          <li>
            <a href="#client">Clients</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div id="mySidenav" className="sidenav">
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a href="#" onClick={closeNav}>
          Home
        </a>
        <a href="#about" onClick={closeNav}>
          About
        </a>
        <a href="#work" onClick={closeNav}>
          Our Work
        </a>
        <a href="#client" onClick={closeNav}>
        Clients
        </a>
        <a href="#contact" onClick={closeNav}>
          Contact
        </a>
      </div>
      <span className="hamburger" onClick={openNav}>
        &#9776;
      </span>
    </div>
  );
}

export default Navbar;
