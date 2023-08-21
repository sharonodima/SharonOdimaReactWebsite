import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import theme from "./theme";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import theme from "./theme"
// import Home from "./pages/home";
// import About from "./pages/about";
//import Contact from "./pages/contact";
import {ThemeProvider} from "styled-components";
import App from "./App"
import { render } from "react-dom"
render (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,
  document.querySelector("#root")
)
ReactDOM.render(<App />, document.getElementById("root"));

