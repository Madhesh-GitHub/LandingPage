import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="logo">WebPro ToolKit</div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <span>Home</span>
        <span>About Us</span>
        <span>Help</span>
        <span>Login</span>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Navbar;