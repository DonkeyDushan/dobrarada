import SingleButton from "./SingleButton";

type ButtonTypes = {
  toggle: "start" | "end",
  setToggle: (toggle: "start" | "end") => void,
  startDate: string,
  endDate: string,
}

const ToggleButtons = ({ toggle, setToggle, startDate, endDate }: ButtonTypes) => {

  return (
    <div className="relative w-72 flex mb-6 bg-gray-300 outline outline-[4px] outline-gray-300 text-sm">
      <SingleButton setToggle={setToggle} date={startDate} startEnd={"start"} toggle={toggle} />
      <SingleButton setToggle={setToggle} date={endDate} startEnd={"end"} toggle={toggle} />
      <div className={`absolute w-[50%] h-[100%] bg-white transition ${toggle === "end" && "translate-x-[100%]"}`}/>
    </div>
  );
};

export default ToggleButtons;
