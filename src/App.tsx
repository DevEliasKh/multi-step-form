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
    <div className="flex flex-col desktop:flex-row w-screen desktop:items-stretch">
      <nav className="h-40 desktop:h-auto ">
        <ul className="flex  justify-center items-center gap-4 h-full relative -top-8 desktop:flex-col desktop:items-start desktop:p-8 desktop:justify-start desktop:static ">
          <Link to={`step1`}>
            <li className="inline desktop:flex">
              <button className={`${pathname[5] == "1" ? "active" : ""} `}>
                1
              </button>
              <span className="hidden desktop:flex flex-col text-white pl-6">
                <span className="">STEP 1</span>
                YOUR INFO
              </span>
            </li>
          </Link>
          <Link to={`step2`}>
            <li className="inline desktop:flex">
              <button className={pathname[5] == "2" ? "active" : ""}>2</button>
              <span className="hidden desktop:flex flex-col text-white pl-6">
                <span className="">STEP 2</span>
                SELECT PLAN
              </span>
            </li>
          </Link>
          <Link to={`step3`}>
            <li className="inline desktop:flex">
              <button className={pathname[5] == "3" ? "active" : ""}>3</button>
              <span className="hidden desktop:flex flex-col text-white pl-6">
                <span className="">STEP 3</span>
                ADD-ONS
              </span>
            </li>
          </Link>
          <Link to={`step4`}>
            <li className="inline desktop:flex">
              <button className={pathname[5] == "4" ? "active" : ""}>4</button>
              <span className="hidden desktop:flex flex-col text-white pl-6">
                <span className="">STEP 4</span>
                SUMMARY
              </span>
            </li>
          </Link>
        </ul>
      </nav>
      <div>
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
