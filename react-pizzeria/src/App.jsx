import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  const [showRegister, setShowRegister] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="switch">
        {showRegister ? <Register /> : <Login />}
        <button
          className="btn btn-secondary btn-switch my-3"
          onClick={() => setShowRegister(!showRegister)}
        >
          {showRegister ? 'Switch to Login' : 'Switch to Register'}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
