import Header from './Header';
import CardPizza from './CardPizza';
import ScrollingText from './ScrollingText';

const Home = () => {
  return (
    <>
      <Header />
      <ScrollingText />
      <div className="container mt-4" id="cards-section">
        <h2 className="cards-section-heading">
          ¿Ha probado nuestros productos más populares? Hay que probarlos, ¡se
          lo prometemos!
        </h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 mt-3">
          <CardPizza
            name="Pizza Huerta Divina"
            price={5950}
            ingredients={[
              'Masa de pizza artesanal',
              'Salsa de tomate casera (con hierbas frescas)',
              'Queso mozzarella fresco',
              'Espárragos asados',
              'Champiñones salteados',
            ]}
            img="src/assets/pizza-1.png"
          />
          <CardPizza
            name="Pizza Paraíso Pesto"
            price={7950}
            ingredients={[
              'Masa de pizza de trigo integral',
              'Pesto con ajo y aceute de oliva',
              'Tomates cherry confitados',
              'Alcachofas a la plancha',
              'Queso de cabra desmenuzado',
            ]}
            img="src/assets/pizza-2.webp"
          />
          <CardPizza
            name="Pizza Reina Mediterránea"
            price={8950}
            ingredients={[
              'Masa de pizza fina y crujiente',
              'Puré de aceitunas negras',
              'Queso feta griego',
              'Pimientos rojos asados',
              'Corazones de alcachofa marinados',
            ]}
            img="src/assets/pizza-3.webp"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
