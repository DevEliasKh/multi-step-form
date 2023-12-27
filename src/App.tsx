import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
   return (
      <>
         <nav className="h-40">
            <ul className="flex justify-center items-center gap-4 h-full relative -top-8">
               <li className="inline">
                  <button>
                     <Link to={`step1`}>1</Link>
                  </button>
               </li>
               <li className="inline">
                  <button>
                     <Link to={`step2`}>2</Link>
                  </button>
               </li>
               <li className="inline">
                  <button>
                     <Link to={`step3`}>3</Link>
                  </button>
               </li>
               <li className="inline">
                  <button>
                     <Link to={`step4`}>4</Link>
                  </button>
               </li>
            </ul>
         </nav>

         <div>
            <Outlet />
         </div>
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
