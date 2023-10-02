import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ApplicationFormProvider from "./context/ApplicationFormProvider";
import CustomQuestionsProvider from "./context/CustomQuestionsProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApplicationFormProvider>
      <CustomQuestionsProvider>
        <App />
      </CustomQuestionsProvider>
    </ApplicationFormProvider>
  </React.StrictMode>
);
