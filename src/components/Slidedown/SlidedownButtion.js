import ChevronUp from "resource/chevron-up-solid.svg";

function SlidedownButton(props) {
  const { isOpen, onClick, children } = props;

  return (
    <div
      className={`slidedownBtn  ${isOpen ? "expanded" : ""}`}
      onClick={onClick}
    >
      {children}
      <img className="icon" src={ChevronUp} alt="arrowUp" />
    </div>
  );
}

export default SlidedownButton;
