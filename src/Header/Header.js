import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

export default () => (
  <section className="hero is-dark">
    <h2>-----HEADER-----</h2>
    <div className="has-background-black-ter">
      <div className="columns is-mobile">
        <div className="column ">
          <Link className="button is-white is-outlined is-medium" to="/">
            Home
          </Link>
        </div>
        <div className="column ">
          <Link className="button is-white is-outlined is-medium" to="/products">
            Products
          </Link>
        </div>
        <div className="column ">
          <Link className="button is-white is-outlined is-medium" to="/wishlist">
            Wishlist
          </Link>
          <hr />
          <Login />
        </div>
      </div>
    </div>
  </section>
);
