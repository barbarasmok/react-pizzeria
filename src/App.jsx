import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';

//import Register from './components/Register';
//import Login from './components/Login';

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

  return (
    <div>
      <Navbar />
      <Home addToCart={addToCart} />
      <Cart cart={cart} updateCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
