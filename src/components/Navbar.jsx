import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
     <Link to="/">
     <img src="./logo.png" alt="" id="logo"/>
     </Link>

  
      
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>

     
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>

     
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

   
      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}

    </div>
  );
}
