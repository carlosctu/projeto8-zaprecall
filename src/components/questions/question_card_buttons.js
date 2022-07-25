export default function CardButtons(props) {
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
          props.setDone,
          props.setIconsFooter,
          props.iconsFooter,
          props.setWrongQuestion
        );
      }}
    >
      <p>{props.cardName}</p>
    </div>
  );
}

function ValidateQuestion(
  answer,
  setIconName,
  setDone,
  setIconsFooter,
  iconsFooter,
  setWrongQuestion
) {
  const Icons = ["checkmark-circle", "alert-circle", "close-circle"];
  if (answer === "Zap") {
    setIconName("checkmark-circle");
    setDone("question-right no-pointer");
    setIconsFooter([...iconsFooter, Icons[0]]);
  } else if (answer === "Quase não lembrei") {
    setIconName("alert-circle");
    setDone("question-alert no-pointer");
    setIconsFooter([...iconsFooter, Icons[1]]);
  } else if (answer === "Não lembrei") {
    setIconName("close-circle");
    setDone("question-wrong no-pointer");
    setIconsFooter([...iconsFooter, Icons[2]]);
    setWrongQuestion(true);
  }
}
