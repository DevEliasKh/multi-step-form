import { useOutletContext, Link } from "react-router-dom";

function Step4() {
  const [toggleState, handleClick, service, setService] = useOutletContext();
  const pathname = window.location.pathname;

  return (
    <>
      {console.log(service.add_ons)}
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
              onClick={() => setService({ ...service, add_ons: add_ons })}
            >
              Next Step
            </button>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Step4;
