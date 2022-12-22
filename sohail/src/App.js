
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';

function App() {
  return (
    <>
    <Router>
        <Routes>
          {/* <Route path="" element={<Header />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} /> */}
        </Routes>
      </Router>
      <Header />
      <Footer />
      {/* <Slider /> */}
    </>
  );
}

export default App;
