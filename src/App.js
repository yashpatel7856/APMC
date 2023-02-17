import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Baskets from './pages/basket';
import Navbar from './componantes/Navbar';
import Home from './componantes/Home';
import About from './componantes/About';
import News from './componantes/News';

import BillingAddress from './pages/billing';
import Offerscard from './pages/OfferCard'
import Dealer from './pages/Dealer';
import Farmerdash from './pages/Farmerdash';
import Brokerinfo from './pages/Brokerinfo';
import Fprevbill from './pages/Fprevbill';
import Fuploadveg from './pages/Fuploadveg';
import Brokerdash from './pages/Brokerdash';
import Bfprevbills from './pages/Bfprevbills';
import Bdprevbills from './pages/Bdprevbills';
import Bbuyveg from './pages/Bbuyveg';
import Buploadveg from './pages/Buploadveg';
import Dealerdash from './pages/Dealerdash';
import Dprevbill from './pages/Dprevbill';
import Dbuyveg from './pages/Dbuyveg';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  
  return (
    <>
      
      
      <Router>
        <Routes>
          <Route  exact path="/" element={<Home/>}>
          </Route>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/billing" element={<BillingAddress/>}></Route>
          <Route exact path="/dealer" element={<Dealer/>}></Route>
          <Route exact path="/shop" element={<Offerscard/>}></Route>
          <Route exact path="/basket" element={<Baskets/>}></Route>
          <Route exact path="/Brokerinfo" element={<Brokerinfo/>}></Route>
          <Route exact path="/farmerdash" element={<Farmerdash/>}></Route>
          <Route exact path="/fprevbill" element={<Fprevbill/>}></Route>
          <Route exact path='/Fuploadveg' element={<Fuploadveg/>}></Route>
          <Route exact path="/Brokerdash" element={<Brokerdash/>}></Route>
          <Route exact path="/Bfprevbill" element={<Bfprevbills/>}></Route>
          <Route exact path="/Bdprevbill" element={<Bdprevbills/>}></Route>
          <Route exact path="/Bbuyveg" element={<Bbuyveg/>}></Route>
          <Route exact path="/Buploadveg" element={<Buploadveg/>}></Route>
          <Route exact path="/Dealerdash" element={<Dealerdash/>}></Route>
          <Route exact path="/Dprevbill" element={<Dprevbill/>}></Route>
          <Route exact path="/Dbuyveg" element={<Dbuyveg/>}></Route>
          <Route exact path="/Login" element={<Login/>}></Route>
          <Route exact path="/Signup" element={<Signup/>}></Route>
          <Route exact path="*" element={<div>Page not found</div>}></Route>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
