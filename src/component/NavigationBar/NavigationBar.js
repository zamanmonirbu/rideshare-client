import {  useState } from "react";
import  './NavigationBar.css'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-4 bg-gray-200">
      <a href="/">
      <img width="48" height="48" src="https://img.icons8.com/color/48/carpool.png" alt="carpool" className="ml-20" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Money</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Trip</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Help</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/">Blog</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/login">
                  {/* login */}
                   {/* {
                    signInInfo.displayName?signInInfo.displayName:"LogInmm"
                  }  */}
                  Login
                </a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mr-20" >
          
          <li>
            <a href="/">Money</a>
          </li>
          <li>
            <a href="/">Trip</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
     
    </div>
  );
}
