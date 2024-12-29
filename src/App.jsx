import React from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import SkillComponent from "./components/SkillComponent.jsx";
import ContactComponent from "./components/ContactComponent.jsx";
import ObserverProvider from "./context/ObserverProvider.jsx";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <ObserverProvider>
        <div className="bg-OffWhite dark:bg-gray-900">
          <NavBar />
          <Hero />
          <ProjectSection />
          <SkillComponent />
          <ContactComponent />
        </div>
      </ObserverProvider>
    </ThemeProvider>
  );
}

export default App;
