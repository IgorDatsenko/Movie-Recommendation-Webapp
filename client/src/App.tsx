import React from 'react';
import {Outlet} from "react-router-dom";
import {NavBar} from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container container-large">
        <Outlet></Outlet>
      </div>
  </>
  );
}

export default App;
