import PropTypes from 'prop-types';

const CardPizza = ({ name, price, ingredients, img }) => {
  const titleWords = name.split(' ');

  return (
    <div className="cardsBlock">
      <div className="card">
        <div className="card-title">
          {titleWords.map((word, index) => (
            <span key={index}>
              {word}
              <br />
            </span>
          ))}
        </div>
        <img src={img} className="card-img-circular" alt={name} />
        <div className="card-body">
          <p className="card-text">{ingredients.join(' , ')}</p>
          <p className="card-price">
            <strong>
              Precio:{' '}
              {price.toLocaleString('es-CL', {
                style: 'currency',
                currency: 'CLP',
              })}
            </strong>
          </p>
          <div className="d-flex justify-start btnGroup">
            <button className="btn btn-primary">Ver más</button>
            <button className="btn btn-success">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

CardPizza.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  img: PropTypes.string.isRequired,
};

export default CardPizza;
