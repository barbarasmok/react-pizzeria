import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu open/close

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const total = 25000;
  const token = false;

  const formatPrice = price => {
    return price.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white" href="#">
          Mamma Mía!
        </a>

        {/* Hamburger Menu Icon for Smaller Screens */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <button className="btn btn-outline-light me-2">Home</button>
          {token ? (
            <>
              <button className="btn btn-outline-light me-2">Profile</button>
              <button className="btn btn-outline-light me-2">Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light me-2">Login</button>
              <button className="btn btn-outline-light me-2">Register</button>
            </>
          )}
          <button className="btn btn-outline-light">
            Total: {formatPrice(total)}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
