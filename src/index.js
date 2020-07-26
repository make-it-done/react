import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";

import App from "./App";
import MethodReactTesting from "./methodReactTesting";
import ClassReactTesting from "./classReactTesting";
import { ReactNativeTesting } from "./ReactNativeTesting";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

//const methodReactTesting = document.getElementById("methodReactTesting");
//render(<MethodReactTesting />, methodReactTesting);

//const classReactTesting = document.getElementById("classReactTesting");
//render(<ClassReactTesting />, classReactTesting);

const reactNativeTesting = document.getElementById("ReactNativeTesting");
render(<ReactNativeTesting />, reactNativeTesting);
