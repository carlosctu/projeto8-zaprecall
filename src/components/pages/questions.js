import React from "react";
function Pergunta(props) {
  return (
    <div className="question">
      <button>
        <p>Pergunta {props.index}</p>
        <ion-icon className="question-play" name="play-outline"></ion-icon>
      </button>
    </div>
  );
}

export default function Questions({ wasClicked }) {
  const index = [1, 2, 3, 4];
  return (
    <>
      <div className="main">
        <header className={wasClicked ? "questions-header" : "hidden"}>
          <img src="assets/images/logo.png" alt="ZapRecall" />
          <h1 className="title">ZapRecall</h1>
        </header>
        <div className={wasClicked ? "questions" : "hidden"}>
          {index.map((e, index) => (
            <Pergunta key={index} index={e} />
          ))}
        </div>
      </div>
    </>
  );
}
