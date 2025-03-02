import PropTypes from 'prop-types';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            <strong>Ingredientes:</strong>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </p>
          <p className="card-text">
            <strong>
              Precio:{' '}
              {price.toLocaleString('es-CL', {
                style: 'currency',
                currency: 'CLP',
              })}
            </strong>
          </p>
          <button className="btn btn-primary me-2">Ver más</button>
          <button className="btn btn-success">Añadir</button>
        </div>
      </div>
    </div>
  );
};

// Validación de props
CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;
