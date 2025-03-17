import { FaChevronDown } from 'react-icons/fa'; // Import the Font Awesome chevron down icon

const Header = () => {
  const scrollToText = () => {
    const scrollingText = document.getElementById('scrollingText');
    if (scrollingText) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const offset = scrollingText.offsetTop - navbarHeight;

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className="text-center py-5 text-white header" // Added class "header"
      style={{
        backgroundImage: "url('/src/assets/header-bg.jpg')", // Make sure the path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', // For positioning the arrow
      }}
    >
      <div className="container">
        <h1 className="text-white">Pizzería Mamma Mía!</h1>
        <h2 className="text-white">From Italy with Love</h2>
      </div>
      <div
        className="scroll-down-arrow"
        onClick={scrollToText}
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          fontSize: '2rem',
          color: 'white',
        }}
      >
        <FaChevronDown /> {/* Use the arrow icon */}
      </div>
    </header>
  );
};

export default Header;
