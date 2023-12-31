import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Step1 from "./routes/step1";
import Step3 from "./routes/step3.tsx";
import Step4 from "./routes/step4.tsx";
import Step2 from "./routes/step2.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "step1",
        element: <Step1 />,
      },
      {
        path: "step2",
        element: <Step2 />,
      },
      {
        path: "step3",
        element: <Step3 />,
      },
      {
        path: "step4",
        element: <Step4 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
