// @flow 
import * as React from 'react';
import {Link} from "react-router-dom";

type Props = {
  
};
export const NavBar = (props: Props) => {
  return (
      <header
          className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">

        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <Link className="nav-link px-2 link-secondary" to="home">Home</Link>
          <Link className="nav-link px-2 link-secondary" to="login">Login</Link>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
      </header>
  );
};