import React, { Suspense } from "react"
import Counter from "../components/Counter";
import { NavLink, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <nav>
        <NavLink to={'/'}>Hello</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
};

export default HomePage;
