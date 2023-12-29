import Toggle from "../component/toggle";
function Step2() {
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
                  <div className="selected border border-black mb-1">
                     <img
                        src="src/assets/images/icon-arcade.svg"
                        alt=""
                        className="w-8 inline"
                     />
                     <div className="inline">
                        Arcade
                        <span>$9/mon</span>
                     </div>
                  </div>
                  <div className="selected border border-black mb-1">
                     Advance
                  </div>
                  <div className="selected border border-black mb-1">Pro</div>
                  <div className="flex justify-center gap-3 bg-ghost_white p-3">
                     <div className="text-sm">Monthly</div>
                     <Toggle />
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
