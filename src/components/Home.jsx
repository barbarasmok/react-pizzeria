import PropTypes from 'prop-types';
import CardPizza from './CardPizza';

const Home = ({ pizzas, addToCart }) => {
  return (
    <div className="container mt-4" id="cards-section">
      <h2 className="cards-section-heading">
        ¿Ha probado nuestros productos más populares? ¡Se lo prometemos!
      </h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3">
        {pizzas.map(pizza => (
          <CardPizza key={pizza.id} pizza={pizza} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  pizzas: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Home;
