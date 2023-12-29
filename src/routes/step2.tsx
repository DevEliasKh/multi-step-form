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
                  <label htmlFor="name">
                     Name
                     <input
                        type="text"
                        id="name"
                        placeholder="e.g. Stephen King"
                        required
                     />
                  </label>
                  <label htmlFor="email">
                     Email Address
                     <input
                        type="email"
                        id="email"
                        placeholder="e.g.stephenking@lorem.com"
                     />
                  </label>
                  <label htmlFor="phone">
                     Phone Number
                     <input
                        type="number"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                     />
                  </label>
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
