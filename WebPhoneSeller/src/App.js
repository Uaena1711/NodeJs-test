import React from 'react';
import { Route , Switch } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

import ProductList from './components/ProductList';
import {Details} from './components/Details';
import Cart from './components/Cart'; 
import Default from './components/Default';
import Modal from './components/Modal';
import FooterPage from './components/Footer';
import CreateAcc from './components/CreateAcc';
import Login from './components/loginForm';

function App() {
  const [isLogin, setLogin] = React.useState("");
  return (
    <React.Fragment>
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path={`/details/:id`} component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <FooterPage />
      <Modal />  
      <CreateAcc />
      <Login />
    </React.Fragment>
  ); 
}

export default App;
