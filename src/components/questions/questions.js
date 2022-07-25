import React from "react";
import Question from "./question";
import logo from "../../assets/img/logo.png";
import "./style.css";



export default function Questions(props) {
  const i = [1, 2, 3, 4];
  return (
    <>
      <div className="main">
        <header className="questions-header">
          <img src={logo} alt="ZapRecall" />
          <h1 className="title">ZapRecall</h1>
        </header>
        <div className="questions">
          {i.map((e, index) => (
            <Question
              key={index}
              useDeck={props.useDeck}
              index={e}
              setCounter={props.setCounter}
              setIconsFooter={props.setIconsFooter}
              iconsFooter={props.iconsFooter}
              setWrongQuestion={props.setWrongQuestion}
            />
          ))}
        </div>
      </div>
    </>
  );
}
