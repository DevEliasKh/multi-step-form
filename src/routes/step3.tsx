import { useState } from "react";
import { useOutletContext, Link } from "react-router-dom";

function Step3() {
  const [toggleState, handleClick, service, setService] = useOutletContext();
  const pathname = window.location.pathname;

  return (
    <>
      <main>
        <form
          action=""
          className="relative -top-20 bg-white my-0 mx-auto w-11/12 rounded-md p-4"
        >
          <fieldset className="flex flex-col">
            <legend className="text-2xl font-bold text-berkeley_blue mt-7">
              Pick add-ons
            </legend>
            <p className="py-4 text-cool_gray">
              Add-ons help enhance your gaming experience.
            </p>
            <label
              htmlFor="online-service"
              className="flex justify-between items-center border border-cool_gray rounded mb-1 p-4"
            >
              <input
                type="checkbox"
                id="online-service"
                className="check w-6 h-6 m-0"
                checked={service.add_ons.online_service}
                onChange={() => {
                  setService({
                    ...service,
                    add_ons: {
                      ...service.add_ons,
                      online_service: !service.add_ons.online_service,
                    },
                  });
                }}
              />
              <div className="flex flex-col">
                <span className="font-bold text-berkeley_blue">
                  Online service
                </span>
                <span className="text-xs text-cool_gray">
                  Access to multiplayer games
                </span>
              </div>
              <span className="text-sm text-palatinate_blue">
                {toggleState == "month" ? `+1$/mo` : "+$10/yr"}
              </span>
            </label>
            <label
              htmlFor="storage"
              className="flex justify-between items-center border border-cool_gray rounded mb-1 p-4"
            >
              <input
                type="checkbox"
                id="storage"
                className="check w-6 h-6 m-0"
                checked={service.add_ons.Large_storage}
                onChange={() => {
                  setService({
                    ...service,
                    add_ons: {
                      ...service.add_ons,
                      Large_storage: !service.add_ons.Large_storage,
                    },
                  });
                }}
              />
              <div className="flex flex-col">
                <span className="font-bold text-berkeley_blue mr-8">
                  Larger storage
                </span>
                <span className="text-xs text-cool_gray">
                  Extra 1TB of cloud save
                </span>
              </div>
              <span className="text-sm text-palatinate_blue">
                {toggleState == "month" ? `+2$/mo` : "+$20/yr"}
              </span>
            </label>
            <label
              htmlFor="profile"
              className="flex justify-between items-center border border-cool_gray rounded mb-1 p-4"
            >
              <input
                type="checkbox"
                id="profile"
                className="check w-6 h-6 m-0"
                checked={service.add_ons.customizable_profile}
                onChange={() => {
                  setService({
                    ...service,
                    add_ons: {
                      ...service.add_ons,
                      customizable_profile:
                        !service.add_ons.customizable_profile,
                    },
                  });
                }}
              />
              <div className="flex flex-col">
                <span className="font-bold text-berkeley_blue">
                  Customizable profile
                </span>
                <span className="text-xs text-cool_gray">
                  Custom theme on your profile
                </span>
              </div>
              <span className="text-sm text-palatinate_blue">
                {toggleState == "month" ? `+2$/mo` : "+$20/yr"}
              </span>
            </label>
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
            <button id="next-btn">Next Step</button>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Step3;
