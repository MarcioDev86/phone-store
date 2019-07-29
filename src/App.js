import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';

// components
import Navibar from './components/Navibar';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Modal from './components/Modal';

function App() {
  return (
    <Fragment>
      <Navibar />
      <Switch>
        <Route exact path='/' component={ProductList} />
        <Route exact path='/details' component={Details} />
        <Route exact path='/cart' component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </Fragment>
  );
}

export default App;
