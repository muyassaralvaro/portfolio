"use client";

import React, { useState, useEffect } from 'react';

export default function Navbar({active="Homepage"}: {active?: string}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ?? "light";

    document.documentElement.setAttribute("data-theme", savedTheme);
    setIsDark(savedTheme === "dark");
  }, []);

  function handleThemeChange() {
    const newTheme = isDark ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  }

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-15 max-h-screen">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="text-base-content">Homepage</a>
            </li>
            <li>
              <a className="text-base-content">Portfolio</a>
            </li>
            <li>
              <a className="text-base-content">About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">A.M</a>
      </div>
      <div className="navbar-end">
        {/* <button className="btn btn-ghost btn-circle">
          <svg
            aria-label="Search"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />{" "}
          </svg>
        </button> */}
        <label className="flex cursor-pointer gap-2 items-center ml-4">
          <i
          className="fa-solid fa-sun text-dark dark:text-white">
          </i>
          <input
            type="checkbox"
            checked={isDark}
            onChange={handleThemeChange}
            className="toggle"
          />
          <i className="fa-solid fa-moon text-dark dark:text-white"></i>
        </label>
      </div>
    </div>
  );
}
