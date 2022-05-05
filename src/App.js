import './App.css';
import { Storepage1 } from "./page/Storepage";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Cartpage1 } from './page/Cart';
import { CartWrapper } from './provider/Provider';

function App() {
  return (
    <BrowserRouter>
      <CartWrapper>
        <Routes>
          <Route path='/' element={<Navigate to={'/store'}/>} />
          <Route path='/store' element={<Storepage1/>} />
          <Route path="/cart" element={<Cartpage1/>} />
        </Routes>
      </CartWrapper>
    </BrowserRouter>
  );
}

export default App;
