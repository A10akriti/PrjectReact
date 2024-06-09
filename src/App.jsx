import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Components/Header';
import Shop from '../Components/Shop';
import Fruits from '../Components/Fruits';
import Vegetables from '../Components/Vegetables';
import Beverages from '../Components/Beverages';


const App = () => {
  return (
    <div>
      Hello
      <Header />
      <Routes>
        
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop" element={<Fruits/>} />
        <Route path="/shop" element={<Vegetables/>} />
        <Route path="/shop" element={<Beverages/>} />
      </Routes>
    </div>
  );
}

export default App;

