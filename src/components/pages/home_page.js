import Questions from "./questions";
import Footer from "./footer";
import React from "react";
export default function HomePage() {
  const [isCounter, setCounter] = React.useState(0);
  const [iconsFooter, setIconsFooter] = React.useState([]);
  const [wrongQuestion, setWrongQuestion] = React.useState(false);
  // const newArr = [...iconsFooter];
  return (
    <>
      <Questions
        setCounter={setCounter}
        iconsFooter={iconsFooter}
        setIconsFooter={setIconsFooter}
        setWrongQuestion={setWrongQuestion}
      />
      <Footer
        isCounter={isCounter}
        iconsFooter={iconsFooter}
        wrongQuestion={wrongQuestion}
      />
    </>
  );
}
