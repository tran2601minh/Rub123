import { useState } from "react";
import SlidedownBody from "./SlidedownBody";
import SlidedownButton from "./SlidedownButtion";
import "./Slidedown.css";

function Slidedown(props) {
  const { header, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="slidedown">
      <SlidedownButton isOpen={isOpen} onClick={() => setIsOpen((val) => !val)}>
        <h4>{header}</h4>
      </SlidedownButton>
      <SlidedownBody isOpen={isOpen}>{children}</SlidedownBody>
    </div>
  );
}

export default Slidedown;
