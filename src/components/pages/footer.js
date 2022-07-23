import React from "react";
import Party from "../../assets/img/party.png";
import Sad from "../../assets/img/sad.png";
export default function Footer(props) {
  let setMessage;
  if (props.isCounter === 4) {
    setMessage = !setMessage;
  }
  return (
    <div className={setMessage ? "footer footer-expanded" : "footer"}>
      <div className={setMessage ? "footer-message" : "hidden"}>
        <div className="message-title">
          <img
            src={props.wrongQuestion ? Sad : Party}
            alt={props.wrongQuestion ? "sad" : "parabens"}
          />
          <p>{props.wrongQuestion ? "Putz..." : "Parabéns!"}</p>
        </div>
        <div className="message-body">
          <p>
            {props.wrongQuestion
              ? "Ainda faltam alguns...\nMas não desanime!"
              : "Você não esqueceu de nenhum flashcard!"}
          </p>
        </div>
      </div>
      <p>{props.isCounter}/4 CONCLUÍDOS</p>
      <div className="footer-icons">
        {props.iconsFooter.map((e, index) => {
          return <ion-icon key={index} name={e}></ion-icon>;
        })}
      </div>
    </div>
  );
}
