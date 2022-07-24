import React from "react";

export default function QuestionCard(props) {
  const [isFlip, setFlip] = React.useState(false);
  const faceQuestionCard = "card card-question-face";
  const backQuestionCard = "card card-question-back";
  return (
    <>
      <div
        className={isFlip ? `${faceQuestionCard} flipback` : faceQuestionCard}
      >
        <p>{props.cardsQuestion[props.index].question}</p>
        <ion-icon
          onClick={() => setFlip((prevState) => !prevState)}
          name="repeat-outline"
        ></ion-icon>
      </div>
      <div className={isFlip ? `${backQuestionCard} flip` : backQuestionCard}>
        <p>{props.cardsQuestion[props.index].answer}</p>
        <div className="card-buttons">{props.children}</div>
      </div>
    </>
  );
}
