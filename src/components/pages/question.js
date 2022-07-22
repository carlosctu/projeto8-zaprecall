import React from "react";

function CardButtons(props) {
    // let test;
  return (
    <div
      className="card-question-back-button"
      onClick={(these) => {
        props.setIcon((prevState) => !prevState);
        props.setClicked((prevState) => !prevState);
        props.setDone("question-done");
        console.log(these.currentTarget.className)
      }}
    >
      <p>{props.name}</p>
    </div>
  );
}

function QuestionCard(props) {
  const [isFlip, setFlip] = React.useState(false);
  const faceQuestionCard = "card card-question-face";
  const backQuestionCard = "card card-question-back";
  const cardButtonsName = [
    { id: 1, name: "Não lembrei", icon: "icon-wrong" },
    { id: 2, name: "Quase não lembrei", icon: "alert-circle-outline" },
    { id: 3, name: "Zap", icon: "checkmark-circle-outline" },
  ];
  return (
    <>
      <div
        className={isFlip ? `${faceQuestionCard} flipback` : faceQuestionCard}
      >
        <p>{props.cardsQuestion[props.position].question}</p>
        <ion-icon
          onClick={() => setFlip((prevState) => !prevState)}
          name="repeat-outline"
        ></ion-icon>
      </div>
      <div className={isFlip ? `${backQuestionCard} flip` : backQuestionCard}>
        <p>{props.cardsQuestion[props.position].answer}</p>
        <div className="card-buttons">
          {cardButtonsName.map((card, index) => (
            <CardButtons
              key={index}
              id={card.id}
              name={card.name}
              setClicked={props.setClicked}
              setDone={props.setDone}
              setIcon={props.setIcon}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Question(props) {
  const [isDone, setDone] = React.useState("");
  const [icon, setIcon] = React.useState(false);
  const [wasClicked, setClicked] = React.useState(false);
  console.log(icon);
  return (
    <>
      <div className={wasClicked ? "hidden" : `question ${isDone}`}>
        <button onClick={() => setClicked((prevState) => !prevState)}>
          <p>Pergunta {props.index}</p>
          <ion-icon
            className={icon ? "icon-wrong" : "question-play"}
            name={icon ? "close-circle-outline" : "play-outline"}
          ></ion-icon>
        </button>
      </div>
      <div className={wasClicked ? "card-question" : "hidden"}>
        <QuestionCard
          position={props.position}
          cardsQuestion={props.cardsQuestion}
          setClicked={setClicked}
          setDone={setDone}
          setIcon={setIcon}
        />
      </div>
    </>
  );
}
