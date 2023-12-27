import "./App.css";

function App() {
   return (
      <>
         <nav className="h-40">
            <ul className="flex justify-center items-center gap-4 h-full relative -top-8">
               <li className="inline">
                  <button>1</button>
               </li>
               <li className="inline">
                  <button>2</button>
               </li>
               <li className="inline">
                  <button>3</button>
               </li>
               <li className="inline">
                  <button>4</button>
               </li>
            </ul>
         </nav>
         <main>
            <form
               action=""
               className="bg-white w-9/12 my-0 mx-auto rounded-md p-4 relative -top-20"
            >
               <fieldset className="flex flex-col">
                  <legend className="text-2xl font-bold text-berkeley_blue">
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
            <div className="btn flex flex-row-reverse justify-between p-6">
               <button id="back-btn" className="hidden">
                  Go Back
               </button>
               <button id="next-btn">Next Step</button>
            </div>
         </footer>
         {/* <p>
            Step 1 Your info Step 2 Select plan Step 3 Add-ons Step 4 Summary
            Personal info Please provide your name, email address, and phone
            number. Name e.g. Stephen King Email Address e.g.
            stephenking@lorem.com Phone Number e.g. +1 234 567 890 Next Step
            Select your plan You have the option of monthly or yearly billing.
            Arcade $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly Go Back Next
            Step Pick add-ons Add-ons help enhance your gaming experience.
            Online service Access to multiplayer games +$1/mo Larger storage
            Extra 1TB of cloud save +$2/mo Customizable Profile Custom theme on
            your profile +$2/mo Go Back Next Step Finishing up Double-check
            everything looks OK before confirming. Total (per month/year) Go
            Back Confirm Thank you! Thanks for confirming your subscription! We
            hope you have fun using our platform. If you ever need support,
            please feel free to email us at support@loremgaming.com.
         </p> */}
      </>
   );
}

export default App;
