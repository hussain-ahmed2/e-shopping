import { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import UserContext from "../user/UserConext";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

export default function Header() {
  const { user, setUser, setAccount, setDisplay, account } =
    useContext(UserContext);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  function handleClick() {
    setUser({});
    setAccount(true);
  }

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
    else setIsMobile(false);
  }, [window.innerWidth]);

  return (
    <header className="fixed top-0 w-full border-b-2 bg-white z-50">
      <nav className="flex justify-between px-4 items-center min-h-16 max-w-screen-xl mx-auto">
        <NavLink
          className="text-2xl font-bold text-emerald-500"
          to={"/"}
          onClick={() => setMobileMenu(false)}
        >
          E-Shop
        </NavLink>
        <div
          className={`flex md:items-center text-center md:gap-10 text-blue-500 font-semibold md:flex-row flex-col max-md:absolute top-16 bg-white right-0  w-full md:w-auto border-b-2 md:border-b-0 transition-all duration-300 overflow-hidden ${
            mobileMenu && isMobile && "h-36"
          } ${!mobileMenu && isMobile && "h-0"}`}
        >
          <NavLink
            className={({ isActive }) =>
              ` md:hover:text-emerald-500 hover:text-white after:[content=''] md:after:block after:h-[2px] after:bg-blue-500 hover:after:bg-emerald-500 after:transition-all after:rounded hover:bg-emerald-600 md:py-0 py-3 transition-all md:hover:bg-transparent ${
                isActive ? "after:w-full" : "after:w-0"
              } hover:after:w-full`
            }
            to={"/"}
            onClick={() => setMobileMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` md:hover:text-emerald-500 hover:text-white after:[content=''] md:after:block after:h-[2px] after:bg-blue-500 hover:after:bg-emerald-500 after:transition-all after:rounded hover:bg-emerald-600 md:py-0 py-3 transition-all md:hover:bg-transparent ${
                isActive ? "after:w-full" : "after:w-0"
              } hover:after:w-full`
            }
            to={"products"}
            onClick={() => setMobileMenu(false)}
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` md:hover:text-emerald-500 hover:text-white after:[content=''] md:after:block after:h-[2px] after:bg-blue-500 hover:after:bg-emerald-500 after:transition-all after:rounded hover:bg-emerald-600 md:py-0 py-3 transition-all md:hover:bg-transparent ${
                isActive ? "after:w-full" : "after:w-0"
              } hover:after:w-full`
            }
            to={"about"}
            onClick={() => setMobileMenu(false)}
          >
            About
          </NavLink>
        </div>
        <div className="flex items-center gap-2 z-20">
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `text-2xl cursor-pointer hover:text-green-500 pe-2 ${
                isActive && "text-green-500"
              }`
            }
          >
            <BsCart2 />
          </NavLink>
          {user.email ? (
            <div className="border-neutral-500 rounded-full relative grid place-content-center group">
              <FaUserCircle className="hover:text-emerald-500 transition-colors text-2xl" />
              <div className="absolute invisible -translate-y-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 top-[99%] right-1/2 w-max text-center shadow bg-white px-4 py-3 rounded">
                <p className="text-blue-500 font-bold">
                  User:{" "}
                  <span className="capitalize font-normal text-black">
                    {user.name}
                  </span>
                </p>
                <button
                  className=" px-5 py-1 mt-2 rounded bg-red-500 text-white hover:bg-black transition-colors"
                  onClick={handleClick}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              className="font-bold border text-sm md:text-base rounded px-1 py-1 w-24 bg-blue-500 hover:bg-emerald-500 transition-all text-white"
              onClick={() => setDisplay((prev) => !prev)}
            >
              {account ? "Login" : "Signup"}
            </button>
          )}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            <CiMenuFries className="text-3xl md:hidden" />
          </div>
        </div>
      </nav>
    </header>
  );
}
