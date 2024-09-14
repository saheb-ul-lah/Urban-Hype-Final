import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import Blog from './components/Blog/Blog';
import Offer from './components/Offer/Offer';
import ProductPage from './Pages/Product';
import CollectionPage from './Pages/Collection';

function App() {
  return (
    <Router>
      <Header /> {/* This stays fixed for all pages */}
      
      <Routes>
        <Route path="/" element={<Main />} /> {/* Home or main page */}
        <Route path="/product" element={<ProductPage />} /> {/* Product page route */}
        <Route path="/shop" element={<Shop />} /> {/* Collection page route */}
        <Route path="/Cart" element={<Cart />} /> {/* Collection page route */}
        <Route path="/Blog" element={<Blog />} /> {/* Collection page route */}
        <Route path="/collection" element={<CollectionPage />} /> {/* Collection page route */}
        <Route path="/offer" element={<Offer />} /> {/* Collection page route */}
      </Routes>
      
      <Footer /> {/* This stays fixed for all pages */}
    </Router>
  );
}

export default App;
