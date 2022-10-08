import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "animate.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter
        basename={
          process.env.NODE_ENV || process.env.NODE_ENV === "development"
            ? ""
            : "smooth-dashboard-template"
        }
      >
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
