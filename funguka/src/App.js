import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import WhatsApp from "./components/WhatsApp";
import ScrollToTopButton from "./components/ScrollToTopButton";


import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Ministry from './pages/Ministry';
import Sermon from './pages/Sermon';
import Events from './pages/Events';
import Contact from './pages/Contact';



import '../src/assets/css/animate.css';
import '../src/assets/css/owl.carousel.min.css';
import '../src/assets/css/owl.theme.default.min.css';
import '../src/assets/css/magnific-popup.css';
import '../src/assets/css/bootstrap-datepicker.css';
import '../src/assets/css/jquery.timepicker.css';

import '../src/assets/css/style.css';


function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ministries" element={<Ministry />} />
              <Route path="/sermons" element={<Sermon />} />
              <Route path="/events" element={<Events />} />
              <Route path="/contact" element={<Contact />} />
              {/* Add other routes below */}
          </Routes>
          <Footer />
          <WhatsApp/>
          <ScrollToTopButton/>
      </Router>
  );
}

export default App;
