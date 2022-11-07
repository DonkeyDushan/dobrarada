import ReactDOM from "react-dom";
import "./global.css";
import Table from "./organisms/Table";

const App = () => {
  return (
    <div className="flex min-h-screen w-screen justify-center items-center flex-col bg-cover bg-black bg-fixed p-10">
      <h1 className="mb-16 text-4xl md:text-7xl font-bold text-white">
        Jedu, ale netěším se
      </h1>
      <Table />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
