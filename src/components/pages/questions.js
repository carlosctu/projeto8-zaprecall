import React from "react";
import logo from "../../assets/img/logo.png";
function comparador() {
  return Math.random() - 0.5;
}
function Question(props) {
  const [isFlip, setFlip] = React.useState(false);
  const faceQuestionCard = "card card-question-face";
  const backQuestionCard = "card card-question-back";
  return (
    <div>
      <div className="hidden">
        <button>
          <p>Pergunta {props.index}</p>
          <ion-icon className="question-play" name="play-outline"></ion-icon>
        </button>
      </div>
      <div className="card-question">
        <div
          className={
            isFlip ? "card card-question-face flipback" : faceQuestionCard
          }
        >
          <p>{props.cardsQuestion[props.position].question}</p>
          <ion-icon
            onClick={() => setFlip((prevState) => !prevState)}
            name="repeat-outline"
          ></ion-icon>
        </div>
        <div
          className={isFlip ? "card card-question-back flip" : backQuestionCard}
        >
          <p>{props.cardsQuestion[props.position].answer}</p>
          <ion-icon
            onClick={() => setFlip((prevState) => !prevState)}
            name="repeat-outline"
          ></ion-icon>
        </div>
      </div>
    </div>
  );
}

// function QuestionFlipped({ index }) {
//   return (
//     <div>
//       <p>{answer[e]}</p>
//     </div>
//   );
// }

export default function Questions({ wasClicked }) {
  const index = [1, 2, 3, 4];
  const cardsQuestion = [
    {
      question: "O que é JSX?",
      answer: "R: uma extensão de linguagem do JavaScript",
    },
    {
      question: "O React é __",
      answer: "R: uma biblioteca JavaScript para construção de interfaces",
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "R: letra maiúscula",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "R: expressões",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer:
        "R: interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "R: gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "R: passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "R: dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  cardsQuestion.sort(comparador);
  return (
    <>
      <div className="main">
        <header className={wasClicked ? "questions-header" : "hidden"}>
          <img src={logo} alt="ZapRecall" />
          <h1 className="title">ZapRecall</h1>
        </header>
        <div className={wasClicked ? "questions" : "hidden"}>
          {index.map((e, index) => (
            <Question
              key={index}
              cardsQuestion={cardsQuestion}
              position={index}
              index={e}
            />
          ))}
        </div>
      </div>
    </>
  );
}
