import "../assets/styles/reset.css";
import "../assets/styles/style.css";
import SplashScreen from "./pages/splash_screen";
import HomePage from "./pages/home_page";
import React from "react";

export default function App() {
  const[showHomePage, setHomePage] = React.useState(false)
  return (
    <main>
      {showHomePage? <HomePage /> : <SplashScreen setHomePage={setHomePage}/>}
    </main>
  );
}
