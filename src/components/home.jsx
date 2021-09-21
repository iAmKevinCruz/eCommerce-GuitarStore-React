import { useState } from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="top-banner">
        <div className="top-banner-text">
          <h1 className="display-1">Mad Strings</h1>
          <h3>Where you're fingers come to be happy</h3>
        </div>

        <img src="/img/guitar10.jpeg" alt="guitars" />
      </div>
    </div>
  );
};

export default Home;
