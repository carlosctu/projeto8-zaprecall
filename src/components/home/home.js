import React from "react";

export default function Home() {
  let [wasClicked, setClicked] = React.useState(false);
  return (
    <div className={wasClicked ? "hidden" : "home-page"}>
      <img
        src="../assets/images/logo.png"
        alt="ZapRecall"
        className="home-logo"
      />
      <h1 className="home-title">ZapRecall</h1>
      <button
        className="home-button"
        onClick={() => setClicked((prevState) => !prevState)}
      >
        <p>Iniciar Recall!</p>
      </button>
    </div>
  );
}
