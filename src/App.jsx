import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="dark:bg-RichBlack">
        <NavBar />
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
