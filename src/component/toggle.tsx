import "./toggle.css";
import { useState } from "react";

function Toggle() {
   const [toggleState, setToggleState] = useState("month");
   function handleClick() {
      if (toggleState == "month") {
         return setToggleState("year");
      }
      return setToggleState("month");
   }
   return (
      <div className={`main main-${toggleState}`} onClick={handleClick}>
         <span className="circle"></span>
      </div>
   );
}

export default Toggle;
