/* eslint-disable @typescript-eslint/no-unused-vars */
import { useOutletContext, Link } from "react-router-dom";
import { AppContext, AppServiceAddOns, Keys } from "../libs/lib";

function Step4() {
  const { service } = useOutletContext<AppContext>();
  const pathname = window.location.pathname;
  const plan = service.plan;
  const add_ons = service.add_ons;
  const cost = {
    arcade: 9,
    advanced: 12,
    pro: 15,
    online_service: 1,
    Large_storage: 2,
    customizable_profile: 2,
  };

  function costOfAdd_ons() {
    let costOfAdd_ons = 0;
    let key: keyof AppServiceAddOns;
    for (key in add_ons) {
      if (add_ons[key]) {
        const price = cost[key] * (service.time == "month" ? 1 : 10);
        costOfAdd_ons = costOfAdd_ons + price;
      }
    }
    console.log(costOfAdd_ons);
    return costOfAdd_ons;
  }

  return (
    <main>
      <div className="relative -top-20 bg-white my-0 mx-auto w-11/12 rounded-md p-4 desktop:static desktop:w-9/12 desktop:p-6">
        <section className="flex flex-col">
          <div className="text-2xl font-bold text-berkeley_blue mt-7">
            Finishing up
          </div>
          <p className="py-4 text-cool_gray">
            Double-check everything looks OK before confirming.
          </p>
          <section className="bg-ghost_white p-2 pb-6 rounded-md">
            <div className="flex justify-between">
              <p className="font-bold text-berkeley_blue">
                {plan}{" "}
                <span>
                  {service.time == "month" ? "(Monthly)" : "(Yearly)"}
                </span>{" "}
              </p>
              <div className="font-bold text-berkeley_blue">
                ${cost[plan] * (service.time == "month" ? 1 : 10)}/
                {service.time == "month" ? "mo" : "yr"}
              </div>
            </div>
            <Link to={"/step2"} className="underline text-cool_gray ">
              {" "}
              Change
            </Link>
            <hr className="text-cool_gray relative top-2" />
            {Keys(add_ons).map((key) => {
              if (add_ons[key]) {
                return (
                  <div className="relative top-4 flex flex-col">
                    <div id={`${key}`} className="flex justify-between">
                      <div className="text-cool_gray">
                        {key.replace("_", " ")}
                      </div>
                      <div>
                        +${cost[key] * (service.time == "month" ? 1 : 10)}/
                        {service.time == "month" ? "mo" : "yr"}
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </section>
          <section className="flex justify-between p-2">
            <div>Total (per {service.time == "month" ? "month" : "year"})</div>
            <div>
              $
              {cost[plan] * (service.time == "month" ? 1 : 10) +
                costOfAdd_ons()}
              /{service.time == "month" ? "mo" : "yr"}
            </div>
          </section>
        </section>
      </div>
      <footer className="flex justify-center">
        <div className="btn w-full flex flex-row justify-between p-6 desktop:w-9/12">
          <Link to={`/step${+pathname[5] - 1}`}>
            <button id="back-btn" className="">
              Go Back
            </button>
          </Link>
          <Link to={`/step${+pathname[5] + 1}`}>
            <button id="next-btn">Confirm</button>
          </Link>
        </div>
      </footer>
    </main>
  );
}

export default Step4;
