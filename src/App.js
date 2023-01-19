import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CoinDetails } from './Components/CoinDetails';
import { Coins } from './Components/Coins';
import { Exchanges } from './Components/Exchanges';
import Footer from './Components/Footer';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';


function App() {
  return (


    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/coin/:id' element={<CoinDetails />} />
      </Routes>
      <Footer />
    </Router>


  );
}

export default App;
