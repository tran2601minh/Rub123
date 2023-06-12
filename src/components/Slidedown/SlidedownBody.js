function SlidedownBody({ isOpen, children }) {
  return (
    <div className={`slidedownBody ${isOpen ? "expanded" : ""}`}>
      <div>{children}</div>
    </div>
  );
}

export default SlidedownBody;
