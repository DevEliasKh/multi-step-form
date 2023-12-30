import { useOutletContext } from "react-router-dom";

function Step3() {
   const [toggleState, handleClick] = useOutletContext();
   return (
      <>
         <main>
            <form
               action="
      "
               className="relative -top-20 bg-white my-0 mx-auto w-11/12 rounded-md p-4"
            >
               <fieldset className="flex flex-col">
                  <legend className="text-2xl font-bold text-berkeley_blue mt-7">
                     Pick add-ons
                  </legend>
                  <p className="py-4 text-cool_gray">
                     Add-ons help enhance your gaming experience.
                  </p>
                  <div className="flex justify-between items-center border border-cool_gray rounded mb-1 p-4">
                     <input
                        type="checkbox"
                        id="online-service"
                        className="check w-6 h-6 m-0"
                     />
                     <label htmlFor="online-service" className="flex flex-col">
                        <span className="font-bold text-berkeley_blue">
                           Online service
                        </span>
                        <span className="text-xs text-cool_gray">
                           Access to multiplayer games
                        </span>
                     </label>
                     <span className="text-sm text-berkeley_blue">+1$/mo</span>
                  </div>
               </fieldset>
            </form>
         </main>
      </>
   );
}

export default Step3;
