import React from "react";
import QuestionCard from "./question_card";
import CardButtons from "./question_card_buttons.js";

export default function Question(props) {
  const [isDone, setDone] = React.useState("");
  const [icon, setIcon] = React.useState(false);
  const [iconName, setIconName] = React.useState("");
  const [wasClicked, setClicked] = React.useState(false);
  const cardButtonsName = ["Não lembrei", "Quase não lembrei", "Zap"];
  return (
    <>
      <div className={wasClicked ? "hidden" : `question ${isDone}`}>
        <button onClick={() => setClicked((prevState) => !prevState)}>
          <p>Pergunta {props.index}</p>
          <ion-icon name={icon ? iconName : "play-outline"}></ion-icon>
        </button>
      </div>
      <div className={wasClicked ? "card-question" : "hidden"}>
        <QuestionCard cardsQuestion={props.cardsQuestion} index={props.index}>
          {cardButtonsName.map((card, index) => (
            <CardButtons
              key={index}
              cardName={card}
              setClicked={setClicked}
              setDone={setDone}
              setIcon={setIcon}
              setIconName={setIconName}
              setCounter={props.setCounter}
              setIconsFooter={props.setIconsFooter}
              iconsFooter={props.iconsFooter}
              setWrongQuestion={props.setWrongQuestion}
            />
          ))}
        </QuestionCard>
      </div>
    </>
  );
}
