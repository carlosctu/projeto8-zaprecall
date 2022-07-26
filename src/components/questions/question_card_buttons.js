export default function CardButtons(props) {
  return (
    <button
      className="card-question-back-button"
      onClick={(event) => {
        props.setIcon((prevState) => !prevState);
        props.setClicked((prevState) => !prevState);
        props.setCounter((prevState) => prevState + 1);
        ValidateQuestion(
          event.target.innerText,
          props.setIconName,
          props.setDone,
          props.setIconsFooter,
          props.iconsFooter,
          props.setWrongQuestion
        );
      }}
    >
      <p>{props.cardName}</p>
    </button>
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
  if (answer === "Não lembrei") {
    setIconName("close-circle");
    setDone("question-wrong no-pointer");
    setIconsFooter([...iconsFooter, Icons[2]]);
    setWrongQuestion(true);
  } else if (answer === "Quase não lembrei") {
    setIconName("alert-circle");
    setDone("question-alert no-pointer");
    setIconsFooter([...iconsFooter, Icons[1]]);
  } else {
    setIconName("checkmark-circle");
    setDone("question-right no-pointer");
    setIconsFooter([...iconsFooter, Icons[0]]);
  }
}
