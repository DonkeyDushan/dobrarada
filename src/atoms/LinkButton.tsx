const LinkButton = ({ text, onClickFunction }: { text: string, onClickFunction: any }) => {
  return (
    <button
      className="text-blue-main hover:text-blue-hover underline"
      onClick={() => onClickFunction()}
    >
      {text}
    </button>
  )
}

export default LinkButton;
