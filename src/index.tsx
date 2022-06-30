import ReactDOM from "react-dom";
import "./global.css";
import Table from "./organisms/Table";

const App = () => {
  return (
    <div className="flex min-h-screen w-screen justify-center items-center flex-col bg-cover bg-[url('swamp.jpeg')] bg-fixed p-10"
    >
      <h1 className="mb-16 text-4xl md:text-7xl font-bold font-serif text-white text-shadow-h1">
        Lesný duch
      </h1>
      <Table />
      <div className="flex flex-wrap flex-col items-end mt-10 md:absolute md:bottom-10 md:right-10 text-white">
        <p> web Natálie, střih Debil, nápad a sponzoring DFW, tribute to Roman Anděl </p>
        <a href="https://www.youtube.com/watch?v=DY65Ms__Lp8" target="_blank" className="underline underline-offset-4"> Lesný duch (2014) </a>
      </div>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));
