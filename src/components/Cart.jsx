import PropTypes from 'prop-types';

const Cart = ({ cart, updateCart }) => {
  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.qty, 0);
  };

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div className="cart-content">
          {cart.map(pizza => (
            <div key={pizza.id} className="cart-item">
              <img src={pizza.img} alt={pizza.name} />
              <div className="cart-info">
                <h5>{pizza.name}</h5>
                <p>Precio: ${pizza.price}</p>
                <div className="cart-add-minus-btns">
                  <button
                    className="btn-plus-primary"
                    onClick={() => updateCart(pizza.id, pizza.qty - 1)}
                  >
                    -
                  </button>
                  <span>{pizza.qty}</span>
                  <button
                    className="btn-minus-secondary"
                    onClick={() => updateCart(pizza.id, pizza.qty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h3>Total: ${calculateTotal().toLocaleString('es-CL')}</h3>
          <button
            className="btn btn-primary"
            onClick={() => alert('Compra realizada')}
          >
            Pagar
          </button>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  updateCart: PropTypes.func.isRequired,
};

export default Cart;
