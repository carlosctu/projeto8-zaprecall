import Questions from "./questions";
import Footer from "./footer";
import React from "react";
export default function HomePage() {
  const [isCounter, setCounter] = React.useState(0);
  const [iconsFooter, setIconsFooter] = React.useState([]);
  return (
    <>
      <Questions setCounter={setCounter} />
      <Footer isCounter={isCounter} />
    </>
  );
}
