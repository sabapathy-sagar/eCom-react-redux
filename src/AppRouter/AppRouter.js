import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Pdp from "../Pdp/Pdp";
import Wishlist from "../Wishlist/Wishlist";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/products" component={Products} />
        <Route path="/pdp/:id" component={Pdp} />
        <Route path="/wishlist" component={Wishlist} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
