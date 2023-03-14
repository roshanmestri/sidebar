import logo from './logo.svg';
import './App.css';
import Sidebar from './component/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import "./pages/dash.css"

function App() {
  return (
     <BrowserRouter>
    < Sidebar>
    <Routes>
      
     <Route path='/' element={<Dashboard/>} />
     <Route path='/product' element={<Product/>} />

     </Routes>
     </Sidebar>
     </BrowserRouter>
  );
}

export default App;
