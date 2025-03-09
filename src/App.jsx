import Inicio from "./components/inicio/Inicio";
import Header from "./components/header/Header";
import ViewCV from "./components/viewCV/ViewCV";

import "@fontsource-variable/onest";

function App() {
  return (
    <>
      <div className="relative text-black dark:text-white">
        <div class="relative h-full w-full bg-neutral-900">
          <div class="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        </div>

        <Header />
        <Inicio />
        <ViewCV />
      </div>
    </>
  );
}

export default App;
