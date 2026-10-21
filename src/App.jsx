import React, { Suspense } from "react";
import Inicio from "./components/inicio/Inicio";
import Header from "./components/header/Header";
import ViewCV from "./components/viewCV/ViewCV";
import Footer from "./components/footer/Footer";
import CardProyects from "./components/cardProyect/CardProyect";
import AboutMe from "./components/aboutMe/AboutMe";
import ArcaneBackground from "./components/rpg/ArcaneBackground";

import "@fontsource-variable/onest";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#08060c] text-center">
          <div className="rounded-sm border border-[#d4a737] bg-[#140f21] p-6 shadow-[0_0_25px_rgba(212,167,55,0.4)]">
            <p className="font-['Cinzel'] text-lg font-bold text-[#fef08a] animate-pulse">
              Cargando portafolio...
            </p>
          </div>
        </div>
      }
    >
      <div className="relative min-h-screen bg-[#08060c] text-[#e2d9cc] antialiased selection:bg-amber-500/30 selection:text-amber-200">
        {/* Fondo atmosférico de brasas y runas mágicas */}
        <ArcaneBackground />

        {/* Barra superior de HUD */}
        <Header />

        {/* Contenido principal del portafolio */}
        <main className="relative z-10">
          <Inicio />
          <CardProyects />
          <AboutMe />
        </main>

        {/* Pie de página medieval */}
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
