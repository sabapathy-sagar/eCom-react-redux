import React from "react";
import Welcome from "../Welcome/Welcome";
import { Link } from "react-router-dom";
import LoginAds from "../Login/LoginAds";

export default () => (
  <div className="hero-body has-background-grey-lighter">
    <div className="container has-text-centered">
      <div className="title">
        <Welcome name="DCP" />
      </div>
      <h2 className="subtitle">
        Take a look at our products:{" "}
        <Link to="/products">
          <button className="button is-primary is-rounded">
            Go To Products
          </button>
        </Link>
        <LoginAds text="Log on to our website and get exclusive discounts" />
      </h2>
    </div>
  </div>
);
