
import './App.css';

import Footer from './componts/footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componts/Home';
import Feature from './componts/Feature';
import Navbar from './componts/Navbar';
import Shop from './componts/Shop';
import Contact from './componts/Contact';
import {CartProvider} from './componts/CartContext'
import BestSelling from './componts/BestSelling';
import Details from './componts/Details';
import { AuthProvider } from './componts/AuthContext';



function App() {
  

  return (
    <div className='mainBody'>
      
      <BrowserRouter>
        <AuthProvider>
        <CartProvider>
        <Navbar />
        <Routes>
    
       
          <Route path="/" element={<Home/>} />
          <Route path="/Shop" element={<Shop />} />
          <Route path='/Feature' element={<Feature />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/bestselling' element={<BestSelling/>}/>
          <Route path='/details' element = {<Details/>}/>


        </Routes>
        </CartProvider>
        </AuthProvider>
        <Footer />
      </BrowserRouter>


    </div>

  );
}

export default App;
