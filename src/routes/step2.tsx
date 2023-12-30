import Toggle from "../component/toggle";
import { useOutletContext } from "react-router-dom";
function Step2() {
   const [toggleState, handleClick] = useOutletContext();

   return (
      <>
         <main>
            <form
               action=""
               className="relative -top-20 bg-white my-0 mx-auto w-9/12 rounded-md p-4"
            >
               <fieldset className="flex flex-col">
                  <legend className="text-2xl font-bold text-berkeley_blue mt-7">
                     Select your plan
                  </legend>
                  <p className="py-4 text-cool_gray">
                     You have the option of monthly or yearly billing.
                  </p>
                  <div className="selected flex border border-cool_gray rounded mb-1 p-4">
                     <img
                        src="src/assets/images/icon-arcade.svg"
                        alt=""
                        className="w-8 inline"
                     />
                     <div className="flex flex-col pl-4">
                        <div className="text-sm font-bold text-berkeley_blue">
                           Arcade
                        </div>
                        <span className="text-cool_gray text-xs">
                           {toggleState == "month" ? "$9/mo" : "$90/yr"}
                        </span>
                        <span
                           className={`text-xs text-berkeley_blue ${
                              toggleState == "month" ? "hidden" : ""
                           }`}
                        >
                           2 months free
                        </span>
                     </div>
                  </div>
                  <div className="selected flex border border-cool_gray rounded mb-1 p-4">
                     <img
                        src="src/assets/images/icon-advanced.svg"
                        alt=""
                        className="w-8 inline"
                     />
                     <div className="flex flex-col pl-4">
                        <div className="text-sm font-bold text-berkeley_blue">
                           Advanced
                        </div>
                        <span className="text-cool_gray text-xs">
                           {toggleState == "month" ? "$12/mo" : "$120/yr"}
                        </span>
                        <span
                           className={`text-xs text-berkeley_blue ${
                              toggleState == "month" ? "hidden" : ""
                           }`}
                        >
                           2 months free
                        </span>
                     </div>
                  </div>
                  <div className="selected flex border border-cool_gray rounded mb-1 p-4">
                     <img
                        src="src/assets/images/icon-pro.svg"
                        alt=""
                        className="w-8 inline"
                     />
                     <div className="flex flex-col pl-4">
                        <div className="text-sm font-bold text-berkeley_blue">
                           Pro
                        </div>
                        <span className="text-cool_gray text-xs">
                           {toggleState == "month" ? "$15/mo" : "$150/yr"}
                        </span>
                        <span
                           className={`text-xs text-berkeley_blue ${
                              toggleState == "month" ? "hidden" : ""
                           }`}
                        >
                           2 months free
                        </span>
                     </div>
                  </div>

                  <div className="flex justify-center gap-3 bg-ghost_white p-3">
                     <div className="text-sm">Monthly</div>
                     <Toggle
                        toggleState={toggleState}
                        handleClick={handleClick}
                     />
                     <div className="text-sm">Yearly</div>
                  </div>
               </fieldset>
            </form>
         </main>
         <footer>
            <div className="btn w-full flex flex-row justify-between p-6">
               <button id="back-btn" className="">
                  Go Back
               </button>
               <button id="next-btn">Next Step</button>
            </div>
         </footer>
      </>
   );
}

export default Step2;
