import React from "react";
import { Link } from "react-router-dom";
// import "../styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/catalog">Book Catalog</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
};

export default Navbar;