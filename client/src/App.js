import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./components/Auth/Auth";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar";
import Payment from "./components/Payment/Payment";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState("");
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const user = useSelector((state) => state.auth.authData);

  const getCartTotal = (orders) => {
    return orders.reduce((amount, item) => parseInt(item.price) + amount, 0);
  };

  return (
    <Router>
      {!user ? (
        <>
          <Auth />
        </>
      ) : (
        <>
          <NavBar toggleHandler={toggleHandler} />
          <MobileNavBar toggle={toggle} toggleHandler={toggleHandler} />
          <Switch>
            <Route path="/payment">
              <Payment getCartTotal={getCartTotal} />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product/:id">
              <ProductDetail currentId={currentId} />
            </Route>
            <Route path="/">
              <Home currentId={currentId} setCurrentId={setCurrentId} />
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
