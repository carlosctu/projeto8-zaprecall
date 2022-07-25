import "../assets/styles/reset.css";
import SplashScreen from "./main/splash_screen";
import HomePage from "./main/home_page";
import React from "react";

export default function App() {
  const [showHomePage, setHomePage] = React.useState(false);
  const [useDeck, setDeck] = React.useState([]);
  return (
    <main>
      {showHomePage ? (
        <HomePage useDeck={useDeck} />
      ) : (
        <SplashScreen setHomePage={setHomePage} setDeck={setDeck} />
      )}
    </main>
  );
}
