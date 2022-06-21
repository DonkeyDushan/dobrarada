import AudioButton from "./AudioButton";
import audioList from "./audiolist";

const Table = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {audioList.map(({ text, src }) => (
        <AudioButton key={src} text={text} src={`assets/${src}.mp3`} />
      ))}
    </div>
  )
};

export default Table;
