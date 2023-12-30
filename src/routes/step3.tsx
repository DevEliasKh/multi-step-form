import { useOutletContext } from "react-router-dom";

function Step3() {
   const [toggleState, handleClick] = useOutletContext();
   return <>step3</>;
}

export default Step3;
