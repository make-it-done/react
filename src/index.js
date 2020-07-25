import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import App from "./App";
import MethodReactTesting from "./methodReactTesting";
import ClassReactTesting from "./classReactTesting";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

//const methodReactTesting = document.getElementById("methodReactTesting");
//render(<MethodReactTesting />, methodReactTesting);

const methodReactTesting = document.getElementById("classReactTesting");
render(<ClassReactTesting />, classReactTesting);
