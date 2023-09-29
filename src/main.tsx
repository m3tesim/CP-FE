import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ApplicationFormProvider from "./context/ApplicationFormProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApplicationFormProvider>
      <App />
    </ApplicationFormProvider>
  </React.StrictMode>
);
