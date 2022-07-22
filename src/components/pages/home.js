import React from "react";
import Questions from "./questions";
import Footer from "./footer";
import logo from "../../assets/img/logo.png";

export default function Home() {
  const [wasClicked, setClicked] = React.useState(false);
  return (
    <>
      <div className={wasClicked ? "hidden" : "home-page"}>
        <img src={logo} alt="ZapRecall" className="home-logo" />
        <h1 className="title">ZapRecall</h1>
        <button
          className="home-button"
          onClick={() => {
            setClicked((prevState) => !prevState);
          }}
        >
          <p>Iniciar Recall!</p>
        </button>
      </div>
      {console.log(wasClicked)}
      <Questions wasClicked={wasClicked} />
      <Footer wasClicked={wasClicked} />
    </>
  );
}
