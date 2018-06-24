import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

export default () => (
  <section className="hero is-dark">
    <h2>-----HEADER-----</h2>
    <div class="has-background-black-ter">
      <div class="columns is-mobile">
        <div class="column ">
          <Link class="button is-white is-outlined is-medium" to="/">
            Home
          </Link>
        </div>
        <div class="column ">
          <Link class="button is-white is-outlined is-medium" to="/products">
            Products
          </Link>
        </div>
        <div class="column ">
          <Link class="button is-white is-outlined is-medium" to="/wishlist">
            Wishlist
          </Link>
          <hr />
          <Login />
        </div>
      </div>
    </div>
  </section>
);
