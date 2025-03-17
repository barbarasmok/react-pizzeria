import PropTypes from 'prop-types'; // Import PropTypes

const CardPizza = ({ pizza, addToCart }) => {
  return (
    <div className="cardsBlock">
      <div className="card" style={{ width: '20rem' }}>
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title">{pizza.name}</h5>
          <p className="card-text">
            Precio: ${pizza.price.toLocaleString('es-CL')}
          </p>
          <ul className="card-ingredients">
            {pizza.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
          <button className="btn btn-primary" onClick={() => addToCart(pizza)}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

// Define prop validation
CardPizza.propTypes = {
  pizza: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CardPizza;
