import LinkButton from "../../../atoms/LinkButton";
import SingleButton from "./SingleButton";

type ButtonTypes = {
  toggle: "start" | "end",
  setToggle: (toggle: "start" | "end") => void,
  startDate: string,
  endDate: string,
  restoreDefault: any,
}

const ToggleButtons = ({ toggle, setToggle, startDate, endDate, restoreDefault }: ButtonTypes) => {

  return (
    <div className="w-full grid grid-cols-5 mb-6">
      <div className="col-start-2 col-span-3 relative w-full flex bg-gray-300 outline outline-[4px] outline-gray-300 text-sm">
        <SingleButton setToggle={setToggle} date={startDate} startEnd={"start"} toggle={toggle} />
        <SingleButton setToggle={setToggle} date={endDate} startEnd={"end"} toggle={toggle} />
        <div className={`absolute w-[50%] h-[100%] bg-white transition ${toggle === "end" && "translate-x-[100%]"}`} />
      </div>
      <div className="col-start-5 col-span-1 flex justify-end items-center pr-1">
        <LinkButton text="Obnovit" onClickFunction={restoreDefault}/>
      </div>
    </div>
  );
};

export default ToggleButtons;
