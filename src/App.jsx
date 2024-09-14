import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ProductPage from './Pages/Product';

function App() {
  return (
    <>
      <Header />
      <Main />
      <ProductPage />
      <Footer />
    </>
  );
}

export default App;