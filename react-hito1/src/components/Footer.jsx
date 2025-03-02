const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          © {new Date().getFullYear()} - Pizzería Mamma Mía! - Todos los
          derechos reservados
          <a href="#">Website by BarbSmok</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
