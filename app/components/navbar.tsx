"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import type { ChangeEvent, MouseEvent } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const themeToggle = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") ?? "light";
    const dark = savedTheme === "dark";
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    if (themeToggle.current) themeToggle.current.checked = dark;
  }, []);

  function handleThemeChange(event: ChangeEvent<HTMLInputElement>) {
    const newTheme = event.currentTarget.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  function closeMenu(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.closest("details")?.removeAttribute("open");
  }

  return (
    <header className="navbar fixed inset-x-0 top-0 z-50 min-h-14 bg-base-100/95 px-2 shadow-sm backdrop-blur sm:px-4">
      <div className="navbar-start">
        <details className="dropdown">
          <summary
            aria-label="Open site navigation"
            className="btn btn-ghost btn-circle list-none"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </summary>
          <ul className="menu dropdown-content z-10 mt-3 w-56 rounded-box bg-base-100 p-2 text-base-content shadow-lg">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </div>

      <div className="navbar-center">
        <Link
          href="/"
          aria-label="Alvaro Muyassar home"
          className="btn btn-ghost text-lg font-black tracking-tight"
        >
          A.M
        </Link>
      </div>

      <div className="navbar-end">
        <label className="flex cursor-pointer items-center gap-2 px-2">
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
          </svg>
          <input
            aria-label="Dark mode"
            type="checkbox"
            role="switch"
            ref={themeToggle}
            onChange={handleThemeChange}
            className="toggle toggle-sm"
          />
          <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" />
          </svg>
        </label>
      </div>
    </header>
  );
}
