import { useState } from "react";
import Toggle from "../component/toggle";
import { useOutletContext, Link } from "react-router-dom";
import { AppContext } from "../libs/lib";
function Step2() {
  const { toggleState, handleClick, service, setService } =
    useOutletContext<AppContext>();
  const pathname = window.location.pathname;

  const [plan, setPlan] = useState(service.plan);

  return (
    <>
      <main>
        <form
          action=""
          className="relative -top-20 bg-white my-0 mx-auto w-11/12 rounded-md p-4"
        >
          <fieldset className="flex flex-col">
            <legend className="text-2xl font-bold text-berkeley_blue mt-7">
              Select your plan
            </legend>
            <p className="py-4 text-cool_gray">
              You have the option of monthly or yearly billing.
            </p>
            <label
              htmlFor="arcade"
              className="selected flex border border-cool_gray rounded mb-1 p-4"
            >
              <input
                type="checkbox"
                name="arcade"
                id="arcade"
                className="check hidden"
                checked={plan === "arcade"}
                onChange={() => setPlan("arcade")}
              />
              <img
                src="/src/assets/images/icon-arcade.svg"
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
            </label>
            <label
              htmlFor="advanced"
              className="selected flex border border-cool_gray rounded mb-1 p-4"
            >
              <input
                type="checkbox"
                name="advanced"
                id="advanced"
                className="check hidden"
                checked={plan === "advanced"}
                onChange={() => setPlan("advanced")}
              />
              <img
                src="/src/assets/images/icon-advanced.svg"
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
            </label>
            <label
              htmlFor="pro"
              className="selected flex border border-cool_gray rounded mb-1 p-4"
            >
              <input
                type="checkbox"
                name="pro"
                id="pro"
                className="check hidden"
                checked={plan === "pro"}
                onChange={() => setPlan("pro")}
              />
              <img
                src="/src/assets/images/icon-pro.svg"
                alt=""
                className="w-8 inline"
              />
              <div className="flex flex-col pl-4">
                <div className="text-sm font-bold text-berkeley_blue">Pro</div>
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
            </label>

            <div className="flex justify-center gap-3 bg-ghost_white p-3">
              <div className="text-sm">Monthly</div>
              <Toggle toggleState={toggleState} handleClick={handleClick} />
              <div className="text-sm">Yearly</div>
            </div>
          </fieldset>
        </form>
      </main>
      <footer>
        <div className="btn w-full flex flex-row justify-between p-6">
          <Link to={`/step${+pathname[5] - 1}`}>
            <button id="back-btn" className="">
              Go Back
            </button>
          </Link>
          <Link to={`/step${+pathname[5] + 1}`}>
            <button
              id="next-btn"
              onClick={() =>
                setService({ ...service, plan: plan, time: toggleState })
              }
            >
              Next Step
            </button>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Step2;
