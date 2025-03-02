const Navbar = () => {
  const total = 25000;
  const token = false;

  const formatPrice = price => {
    return price.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP',
    });
  };

  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white" href="#">
          Pizzería Mamma Mía!
        </a>
        <div className="d-flex">
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
