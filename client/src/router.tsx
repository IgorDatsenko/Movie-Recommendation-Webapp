import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App";
import React from "react";
import {Login, Home} from "./pages";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="Home" element={<Home />} />
        </Route>
    )
);