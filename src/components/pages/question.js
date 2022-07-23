import React from "react";

function ValidateQuestion(answer, setIconName, setDone) {
  console.log(answer)
  if (answer === "Zap") {
    setIconName("checkmark-circle");
    setDone("question-right");
  } else if (answer === "Quase não lembrei") {
    setIconName("alert-circle");
    setDone("question-alert");
  } else if (answer === "Não lembrei") {
    setIconName("close-circle");
    setDone("question-wrong");
  }
}

function CardButtons(props) {
  return (
    <div
      className="card-question-back-button"
      onClick={(these) => {
        props.setIcon((prevState) => !prevState);
        props.setClicked((prevState) => !prevState);
        props.setCounter((prevState) => prevState + 1);
        ValidateQuestion(
          these.target.innerText,
          props.setIconName,
          props.setDone
        );
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
              setIconName={props.setIconName}
              setCounter={props.setCounter}
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
  const [iconName, setIconName] = React.useState("");
  const [wasClicked, setClicked] = React.useState(false);
  return (
    <>
      <div className={wasClicked ? "hidden" : `question ${isDone}`}>
        <button onClick={() => setClicked((prevState) => !prevState)}>
          <p>Pergunta {props.index}</p>
          <ion-icon name={icon ? iconName : "play-outline"}></ion-icon>
        </button>
      </div>
      <div className={wasClicked ? "card-question" : "hidden"}>
        <QuestionCard
          position={props.position}
          cardsQuestion={props.cardsQuestion}
          setClicked={setClicked}
          setDone={setDone}
          setIcon={setIcon}
          setIconName={setIconName}
          setCounter={props.setCounter}
        />
      </div>
    </>
  );
}
