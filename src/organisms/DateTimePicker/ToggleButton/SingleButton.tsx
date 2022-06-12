
type SingleButtonTypes = {
  setToggle: (toggle: "start" | "end") => void,
  date: string,
  toggle: string,
  startEnd: "start" | "end",
}

const SingleButton = ({ setToggle, date, toggle, startEnd }: SingleButtonTypes) => {
  console.log(toggle)
  return (
    <button
      className={`z-[2] w-[50%] px-[10px] py-[5px] grid grid-rows-2}`}
      onClick={() => setToggle(startEnd)}>
      <span className={`flex content-start ${toggle === startEnd && "font-semibold"}`}> {startEnd === "start" ? "Začátek" : "Konec"} </span>
      <span className="flex content-start text-gray-border whitespace-nowrap"> {date} </span>
    </button>
  )
}

export default SingleButton;
