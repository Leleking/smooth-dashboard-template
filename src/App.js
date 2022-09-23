import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import "animate.css";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
