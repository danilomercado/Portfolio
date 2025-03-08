import Inicio from "./components/inicio/Inicio";
import Header from "./components/header/Header";
import "@fontsource-variable/onest";

function App() {
  return (
    <>
      <div className="relative text-black dark:text-white">
        <Header />
        <Inicio />
      </div>
    </>
  );
}

export default App;
