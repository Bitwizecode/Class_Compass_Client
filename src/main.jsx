import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import "react-toastify/dist/ReactToastify.min.css";
import { injectStyle } from "react-toastify/dist/inject-style";
import BottomNavbarContextProvider from "./contexts/contexts.jsx";
import ExamResultContextProvider from "./contexts/ExamResultContextProvider.jsx";
injectStyle();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BottomNavbarContextProvider>
      <ExamResultContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
      </ExamResultContextProvider>
    </BottomNavbarContextProvider>
  </React.StrictMode>
);
