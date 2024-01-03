function Step5() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center relative -top-20 bg-white my-0 mx-auto w-11/12 rounded-md p-4">
        <img
          src="/src/assets/images/icon-thank-you.svg"
          alt=""
          className="w-20 py-6"
        />
        <div className="text-center text-cool_gray">
          <p className="text-berkeley_blue font-bold text-lg pb-4">
            Thank you!
          </p>{" "}
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </div>
      </div>
    </main>
  );
}

export default Step5;
