import ReactDOM from "react-dom";
import "./global.css";

const App = () => {
  return (
    <div className="flex h-screen w-screen bg-cover bg-[url('./src/atoms/images/swamp.jpeg')] p-10 justify-center">
      <h1 className="text-7xl font-bold font-serif text-white text-shadow-h1">
        Lesný duch
      </h1>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));
