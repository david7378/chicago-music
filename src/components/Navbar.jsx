import React, { useState } from "react";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className="navbar-containter fixed-top">
      <div className={navbar ? "navbar active" : "navbar"}>
        <h1 id="chicagomusic">Chicago Music</h1>
        <div className="links">
          <a href="/home">Home</a>

          <a href="/postlist">Track List</a>

          <a href="/addpost" id="newtrack">
            New Track
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
