import React from "react";
import "./App.css";
import Home from "./components/Home";
import Tooltip from "@mui/material/Tooltip";
import ModalComp from "./Modal/Modal";

function App() {
  return (
    <div className="App">
      <Home />

      {/* floating chat button */}

      <ModalComp />
     
    </div>
  );
}

export default App;
