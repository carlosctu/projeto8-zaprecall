import React from "react";
import logo from "../../assets/img/logo.png";
import "./style.css";

const deckReact = [
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
    answer: "R: interagindo com a DOM para colocar componentes React na mesma",
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
const deckJs = [
  {
    question: "Que é Javascript?",
    answer: "R: linguagem utilizada para desenvolver páginas web interativas",
  },
  {
    question: "Os tipos de dados primitivos de JS são __",
    answer: "R: String, Number, Boolean, Null, Undefined, Symbol",
  },
  {
    question: "Como comentar em Javascript?",
    answer: "R: usando // ou /**/",
  },
  {
    question: "Que significa NaN?",
    answer: "R: Not a Number",
  },
  {
    question: "Que é variável undefined?",
    answer: "R: variável que ainda não possui valor atribuido ",
  },
  {
    question: "Que tipos de escopo de variável existem?",
    answer: "R: escopo local e global",
  },
  {
    question: "Que é o prompt?",
    answer: "R: uma caixa de diálogo em tela com uma mensagem opcional",
  },
  {
    question: "O evento onClick serve para_",
    answer: "R: serve para realizar alguma ação ao elemento ser clickado",
  },
];
const deckCss = [
  {
    question: "O CSS é_",
    answer: "R: usado para modificar os estilos dos elementos no HTML",
  },
  {
    question: "Versão mais atual de CSS?",
    answer: "R: CSS3",
  },
  {
    question: "Como você especifica uma cor no CSS?",
    answer: "R: através do formato RGB ou Hexadecimal",
  },
  {
    question: "O RGB é o acronimo de_",
    answer: "R: Red, Green, Blue",
  },
  {
    question: "Que é um seletor?",
    answer: "R: é o elemento do HTML que gostariamos de alterar",
  },
  {
    question: "As pseudo-classes permitem_",
    answer: "R: estilizar um elemento quando ele está num estado específico",
  },
  {
    question: "Para que é usado o pseudo-elemento?",
    answer: "R: são usados para estilizar uma parte especifica do elemento",
  },
  {
    question: "Para que serve o inherit no CSS?",
    answer: "R: é utilizado para herdar os estilos do elemento pai",
  },
];

function Random() {
  return Math.random() - 0.5;
}

function SetDeck(deck, setDeck, setReady) {
  if (deck !== "default") {
    setReady("");
    if (deck === "deckReact") {
      setDeck([...deckReact]);
      deckReact.sort(Random);
    } else if (deck === "deckJs") {
      setDeck([...deckJs]);
      deckJs.sort(Random);
    } else if (deck === "deckCss") {
      setDeck([...deckCss]);
      deckCss.sort(Random);
    }
  }
}

export default function SplashScreen(props) {
  const [notReady, setReady] = React.useState("no-pointer");
  return (
    <>
      <div className="home-page">
        <img src={logo} alt="ZapRecall" className="home-logo" />
        <h1 className="title">ZapRecall</h1>
        <select
          className="select-form"
          onChange={(these) =>
            SetDeck(these.target.value, props.setDeck, setReady)
          }
        >
          <option value="default">Escolha seu deck</option>
          <option value="deckReact">React</option>
          <option value="deckJs">JavaScript</option>
          <option value="deckCss">CSS</option>
        </select>
        <button
          className={`home-button ${notReady}`}
          onClick={() => {
            props.setHomePage(true);
          }}
        >
          <p>Iniciar Recall!</p>
        </button>
      </div>
    </>
  );
}
