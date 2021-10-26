import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Account/Login';
import Registration from './components/Account/Registration';
import CartPage from './components/CartPage/CartPage';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFoundPage/NotFound';
import Shop from './components/Shop/Shop';
import ContextAuth from './Context/ContextAuth';
import useFirebase from './Hooks/useFirebase';

function App() {
     const {user, handleSignOut} = useFirebase();
  return (
<div className="App">
  <ContextAuth>
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/home">
            <Shop />
          </Route>
          <Route exact path="/cart">
            <CartPage />  
          </Route>
          <Route exact path="/inventory">
            <Inventory />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/account">
          {
           user.email ? <>
           <h2>{user.displayName}</h2>
           <img src={user.photoURL} alt="" />
          <button onClick={handleSignOut}>Logout</button>
           </>:
           <Login />
           }
          </Route>
          <Route path="/signup">
            <Registration />
           </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
  </ContextAuth>
</div>
  );
}

export default App;
