import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.scss';
import { useEffect, useState } from 'react';
import Home from './Routes/Home';
import Catalog from './Routes/Catalog';
import ProductCard from './Routes/ProductCard';
import Ordering from './Routes/Ordering';
import Header from './comtonents/Header';
import HeaderMedia from './comtonents/HeaderMedia';
import Footer from './comtonents/Footer';
import FooterMedia from './comtonents/FooterMedia';
import FavorableInstallments from './Routes/FavorableInstallments';
import Contact from './Routes/Contact';
import Error from './Routes/Error';
import Bag from './Routes/Bag';

import Confirmation from './Routes/Confirmation';
import { useSelector } from 'react-redux';
import SubmitCart from './Routes/SubmitCart';

function App() {

  

  const [darkMode,setDarkMode] = useState(true);

  function onClickDarkmode(){setDarkMode(!darkMode)}
  
  return (
    <div className={`App`} id={darkMode ? '':'darkMode'}>
      
       <BrowserRouter>
       
        <Header />

        <HeaderMedia /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Catalog/Details/:id" element={<ProductCard />}/>
          <Route path="/Catalog/Details/Ordering/" element={<Ordering />}/>
          <Route path="/Catalog/Details/Installments" element={<FavorableInstallments />}/>
          <Route path="/Catalog/Confirmation" element={<Confirmation />}/>
          <Route path="/Contacts/" element={<Contact />}/>
          <Route path="/Error" element={<Error />}/>
          <Route path="/Bag" element={<Bag />}/>
        </Routes>

        <Footer />

        <FooterMedia />

       </BrowserRouter>
    
    </div>
  );
}

export default App;