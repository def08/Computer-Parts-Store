import './App.css';
import { Storepage1 } from "./page/Storepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Storepage1/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
