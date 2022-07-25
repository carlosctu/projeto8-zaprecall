import React from "react";
import Questions from "../questions/questions";
import Footer from "../footer/footer";
import "./style.css";
export default function HomePage({ useDeck }) {
  const [isCounter, setCounter] = React.useState(0);
  const [iconsFooter, setIconsFooter] = React.useState([]);
  const [wrongQuestion, setWrongQuestion] = React.useState(false);
  return (
    <>
      <Questions
        setCounter={setCounter}
        iconsFooter={iconsFooter}
        setIconsFooter={setIconsFooter}
        setWrongQuestion={setWrongQuestion}
        useDeck={useDeck}
      />
      <Footer
        isCounter={isCounter}
        iconsFooter={iconsFooter}
        wrongQuestion={wrongQuestion}
      />
    </>
  );
}
