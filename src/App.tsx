import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { AppContext, AppService } from "./libs/lib";

function App() {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  if (pathname == "/") {
    setTimeout(() => {
      return navigate("/step1");
    }, 0);
  }
  const [toggleState, setToggleState] = useState("month");
  function handleClick() {
    if (toggleState == "month") {
      return setToggleState("year");
    }
    return setToggleState("month");
  }

  const [service, setService] = useState<AppService>({
    plan: "arcade",
    time: toggleState,
    add_ons: {
      online_service: false,
      Large_storage: false,
      customizable_profile: false,
    },
  });

  return (
    <div className="flex flex-col desktop:flex-row w-full desktop:p-6">
      <nav className="h-40 desktop:h-full desktop:w-1/4">
        <ul className="flex  justify-center items-center gap-4 h-full relative -top-8 desktop:flex-col desktop:items-start desktop:p-8 desktop:justify-start desktop:static desktop:gap-8">
          <Link to={`step1`}>
            <li className="inline desktop:flex">
              <button className={`${pathname[5] == "1" ? "active" : ""} `}>
                1
              </button>
              <span className="hidden desktop:flex flex-col text-white pl-6">
                <span className="text-cool_gray">STEP 1</span>
                <span className="font-bold">YOUR INFO</span>
              </span>
            </li>
          </Link>
          <Link to={`step2`}>
            <li className="inline desktop:flex">
              <button className={pathname[5] == "2" ? "active" : ""}>2</button>
              <span className="hidden desktop:flex flex-col text-white pl-6">
                <span className="text-cool_gray">STEP 2</span>
                <span className="font-bold">SELECT PLAN</span>
              </span>
            </li>
          </Link>
          <Link to={`step3`}>
            <li className="inline desktop:flex">
              <button className={pathname[5] == "3" ? "active" : ""}>3</button>
              <span className="hidden desktop:flex flex-col text-white pl-6">
                <span className="text-cool_gray">STEP 3</span>
                <span className="font-bold">ADD-ONS</span>
              </span>
            </li>
          </Link>
          <Link to={`step4`}>
            <li className="inline desktop:flex">
              <button className={pathname[5] == "4" ? "active" : ""}>4</button>
              <span className="hidden desktop:flex flex-col text-white pl-6">
                <span className="text-cool_gray">STEP 4</span>
                <span className="font-bold">SUMMARY</span>
              </span>
            </li>
          </Link>
        </ul>
      </nav>
      <div className="content desktop:w-3/4 flex flex-col justify-center p-">
        <Outlet
          context={
            {
              toggleState,
              handleClick,
              service,
              setService,
            } satisfies AppContext
          }
        />
      </div>
    </div>
  );
}

export default App;
