import PropTypes from 'prop-types';

const Cart = ({ cart, updateCart }) => {
  const increaseQty = pizza => {
    updateCart(
      cart.map(p => (p.id === pizza.id ? { ...p, qty: p.qty + 1 } : p))
    );
  };

  const decreaseQty = pizza => {
    const newCart = cart
      .map(p => (p.id === pizza.id ? { ...p, qty: p.qty - 1 } : p))
      .filter(p => p.qty > 0);
    updateCart(newCart);
  };

  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="container mt-0 mb-5" id="cart-block">
      <h2 className="cards-section-heading mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map(pizza => (
              <li
                key={pizza.id}
                className="cart-list-group list-group-item d-flex"
              >
                <div className="cart-row py-2">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    style={{ width: '50px' }}
                  />
                  {pizza.name} - ${pizza.price.toLocaleString('es-CL')} x{' '}
                  {pizza.qty}
                </div>
                <div className="cart-buttons py-2 px-4">
                  <button
                    className="btn btn-minus-secondary mx-1"
                    onClick={() => decreaseQty(pizza)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-plus-primary mx-1"
                    onClick={() => increaseQty(pizza)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="mt-3">Total: ${total.toLocaleString('es-CL')}</h4>
          <button className="btn btn-success mt-2">Pagar</button>
        </>
      )}
    </div>
  );
};

// Define PropTypes to avoid missing validation warnings
Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      qty: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default Cart;
