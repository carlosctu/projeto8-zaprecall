import React from "react";
import logo from "../../assets/img/logo.png";

export default function SplashScreen({ setHomePage }) {
  return (
    <>
      <div className="home-page">
        <img src={logo} alt="ZapRecall" className="home-logo" />
        <h1 className="title">ZapRecall</h1>
        <button
          className="home-button"
          onClick={() => {
            setHomePage(true);
          }}
        >
          <p>Iniciar Recall!</p>
        </button>
      </div>
    </>
  );
}
