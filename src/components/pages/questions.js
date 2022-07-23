import React from "react";
import Question from "./question";

import logo from "../../assets/img/logo.png";
function Random() {
  return Math.random() - 0.5;
}

export default function Questions(props) {
  const i = [1, 2, 3, 4];
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
  cardsQuestion.sort(Random);
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
              cardsQuestion={cardsQuestion}
              position={index}
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
