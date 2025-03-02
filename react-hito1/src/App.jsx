import Navbar from './components/Navbar';
import Home from './components/Home';
import FollowUs from './components/FollowUs'; // Import the FollowUs component
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Home />
      <FollowUs />
      <Footer />
    </div>
  );
}

export default App;
