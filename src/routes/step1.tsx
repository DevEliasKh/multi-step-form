function Step1() {
   return (
      <>
         <main>
            <form
               action=""
               className="relative -top-20 bg-white my-0 mx-auto w-9/12 rounded-md p-4"
            >
               <fieldset className="flex flex-col">
                  <legend className="text-2xl font-bold text-berkeley_blue mt-7">
                     Personal info
                  </legend>
                  <p className="py-4 text-cool_gray">
                     Please provide your name, email address, and phone number
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
            <div className="btn w-full flex flex-row-reverse justify-between p-6">
               <button id="back-btn" className="hidden">
                  Go Back
               </button>
               <button id="next-btn">Next Step</button>
            </div>
         </footer>
      </>
   );
}

export default Step1;
