import logo from './logo.svg';
import './App.css';
import Homepage from './pages/HomePage';
import {Route , Routes} from 'react-router-dom'
import Cartpage from './pages/CartPage';
import Loginpage from './pages/LoginPage';
import Productinfo from './pages/Productinfo';
import Registerpage from './pages/RegisterPage';

import './stylesheets/layout.css'
import Product from './components/Product';
import Phonecart from './components/Phonecart';
import Sresult from './components/Sresult';


function App() {
  return (
    <div className="App">
      <Homepage> </Homepage>
          <Routes>
              <Route path='/login' exact element ={<Loginpage/>} />
              <Route path='/register' exact element ={<Registerpage/>} />
              <Route path='/productinfo' exact element ={<Productinfo/>} />
              <Route path='/cart' exact element ={<Cartpage/>} />
              <Route path='/product' exact element ={<Product/>} />
              <Route path='/phonecart' exact element ={<Phonecart/>} />
              <Route path='/sresult' exact element ={<Sresult/>} />
              
          </Routes>
        
    </div>
  );
}

export default App;
