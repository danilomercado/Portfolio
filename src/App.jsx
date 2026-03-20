import Inicio from "./components/inicio/Inicio";
import Header from "./components/header/Header";
import ViewCV from "./components/viewCV/ViewCV";
import Footer from "./components/footer/Footer";
import CardProyects from "./components/cardProyect/CardProyect";
import AboutMe from "./components/aboutMe/AboutMe";
import { Suspense } from "react";

import "@fontsource-variable/onest";

function App() {
  return (
    <Suspense fallback="Loading translations...">
      <div className="min-h-screen bg-[#050816] text-white antialiased">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(59,130,246,0.10),_transparent_25%),linear-gradient(to_bottom,_#050816,_#0b1120)]" />
        <Header />

        <main className="relative">
          <Inicio />
          <ViewCV />
          <CardProyects />
          <AboutMe />
        </main>

        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
