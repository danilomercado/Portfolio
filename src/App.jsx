import React, { Suspense } from "react";
import Inicio from "./components/inicio/Inicio";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Experience from "./components/experience/Experience";
import CardProyects from "./components/cardProyect/CardProyect";
import AboutMe from "./components/aboutMe/AboutMe";
import TechStack from "./components/techStack/TechStack";
import ScrollFx from "./components/scrollFx/ScrollFx";
import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Header />
      <main>
        <Inicio />
        <Experience />
        <CardProyects />
        <AboutMe />
        <TechStack />
      </main>
      <Footer />
      <ScrollFx />
      <Cursor />
    </Suspense>
  );
}

export default App;
