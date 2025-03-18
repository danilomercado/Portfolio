import Inicio from "./components/inicio/Inicio";
import Header from "./components/header/Header";
import ViewCV from "./components/viewCV/ViewCV";

import "@fontsource-variable/onest";
import Footer from "./components/footer/Footer";
import CardProyects from "./components/cardProyect/CardProyect";
import AboutMe from "./components/aboutMe/AboutMe";
import { Suspense } from "react";
// import { useTranslation } from "react-i18next";

function App() {
  return (
    <>
      <Suspense fallback="Loading translations...">
        <div className="relative text-black dark:text-white">
          <div>
            <Header />
            <Inicio />
            <ViewCV />
            <CardProyects />
            <AboutMe />
            <Footer />
          </div>
        </div>
      </Suspense>
    </>
  );
}

export default App;
