import ReactDOM from "react-dom";
import "./global.css";
import Table from "./organisms/Table";

const App = () => {
  return (
    <div className="flex min-h-screen w-screen justify-center items-center flex-col bg-cover bg-[url('/assets/swamp.jpeg')] bg-fixed p-10"
    >
      <h1 className="mb-16 text-4xl md:text-7xl font-bold font-serif text-white text-shadow-h1">
        Lesný duch
      </h1>
      <Table />
      <div className="mt-10 md:absolute md:bottom-10 md:right-10 text-white">
        web Natálie, střih Debil, nápad a sponzoring DFW, tribute to Roman Anděl
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));
