import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import LandingPage from "./LandingPage";
import projects from './githubProjects';

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in.
 *
 * Visiting a non-existant route navigates to the homepage.
 */

function RoutesList({enter}) {
  console.debug(
    "Routes",
  );

  return (
    <div className="pt-5">
      <Routes>
      <Route path="/madelynromberg" element={<Homepage projects={projects}/>} />
      <Route path="/"element={<LandingPage enter={enter} />} />
      <Route path="*"element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default RoutesList;
