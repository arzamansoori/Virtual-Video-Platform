import React from "react";

const Sidebar = () => {
  return (
    <div className="shadow-lg px-5 py-4 font-mono w-44">
      {/* top */}
      <div>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>History</li>
        </ul>
      </div>

      <div className="py-2">
        <h1 className="font-bold">Subscription</h1>
        <ul>
          <li>Dummy</li>
          <li>Dummy</li>
          <li>Dummy</li>
        </ul>
      </div>

      <div className="py-2">
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Movies</li>
          <li>Music</li>
        </ul>
      </div>
    </div>
  )
};

export default Sidebar;
