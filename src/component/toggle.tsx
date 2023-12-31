import "./toggle.css";
// import { useState } from "react";

interface props {
  toggleState: string;
  handleClick: () => void;
}

function Toggle({ toggleState, handleClick }: props) {
  return (
    <div className={`main main-${toggleState}`} onClick={handleClick}>
      <span className="circle"></span>
    </div>
  );
}

export default Toggle;
