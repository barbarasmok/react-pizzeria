import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ScrollingText from './components/ScrollingText.jsx';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import { pizzas } from './components/pizzas.js'; // Import pizzas from the correct location

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = pizza => {
    setCart(prevCart => {
      const existingPizza = prevCart.find(p => p.id === pizza.id);
      if (existingPizza) {
        return prevCart.map(p =>
          p.id === pizza.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prevCart, { ...pizza, qty: 1 }];
    });
  };

  const updateCart = (pizzaId, qty) => {
    setCart(prevCart => {
      if (qty === 0) {
        return prevCart.filter(pizza => pizza.id !== pizzaId); // Remove pizza if qty is 0
      }
      return prevCart.map(pizza =>
        pizza.id === pizzaId ? { ...pizza, qty } : pizza
      );
    });
  };

  return (
    <div>
      <Navbar />
      <Header />
      <ScrollingText />
      <Home pizzas={pizzas} addToCart={addToCart} />
      <Cart cart={cart} updateCart={updateCart} />
      <Footer />
    </div>
  );
}

export default App;
