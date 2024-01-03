import { Link } from "react-router-dom";

function Step1() {
  const pathname = window.location.pathname;

  return (
    <>
      <main>
        <form
          action=""
          className="relative -top-20 bg-white my-0 mx-auto w-11/12 rounded-md p-4 desktop:static desktop:w-auto desktop:p-6"
        >
          <fieldset className="flex flex-col">
            <legend className="text-2xl font-bold text-berkeley_blue mt-7">
              Personal info
            </legend>
            <p className="py-4 text-cool_gray">
              Please provide your name, email address, and phone number
            </p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              required
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="e.g.stephenking@lorem.com"
            />
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" placeholder="e.g. +1 234 567 890" />
          </fieldset>
        </form>
      </main>
      <footer>
        <div className="btn w-full flex flex-row-reverse justify-between p-6">
          <button id="back-btn" className="hidden">
            Go Back
          </button>
          <Link to={`/step${+pathname[5] + 1}`}>
            <button id="next-btn">Next Step</button>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Step1;
