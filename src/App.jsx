import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import SkillComponent from "./components/SkillComponent.jsx";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="bg-OffWhite dark:bg-gray-900">
        <NavBar />
        <Hero />
        <ProjectSection />
        <SkillComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
