import './App.css';
import { Storepage1 } from "./page/Storepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cartpage1 } from './page/Cart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/store' element={<Storepage1/>} />
        <Route path='/cart' element={<Cartpage1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
