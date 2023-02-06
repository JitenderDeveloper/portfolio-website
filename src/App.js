import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Product_page from './Pages/Product_page';

function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product_page' element={<Product_page />} />
      </Routes>
    </>
  );
}

export default App;
