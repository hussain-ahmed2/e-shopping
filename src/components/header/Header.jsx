import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import UserContext from "../user/UserConext";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { user, setUser, setAccount, setDisplay, account } =
    useContext(UserContext);

  function handleClick() {
    setUser({});
    setAccount(true);
  }

  return (
    <header className="fixed top-0 w-full border-b-2 bg-white z-50">
      <nav className="flex justify-between px-4 items-center min-h-16 max-w-screen-xl mx-auto">
        <NavLink className="text-2xl font-bold text-emerald-500" to={"/"}>
          E-Shop
        </NavLink>
        <div className="flex items-center gap-10 text-blue-500 font-semibold">
          <NavLink
            className={({ isActive }) =>
              ` hover:text-emerald-500 after:[content=''] after:block after:h-[2px] after:bg-blue-500 hover:after:bg-emerald-500 after:transition-all after:rounded ${
                isActive ? "after:w-full" : "after:w-0"
              } hover:after:w-full`
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` hover:text-emerald-500 after:[content=''] after:block after:h-[2px] after:bg-blue-500 hover:after:bg-emerald-500 after:transition-all after:rounded ${
                isActive ? "after:w-full" : "after:w-0"
              } hover:after:w-full`
            }
            to={"products"}
          >
            Products
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              ` hover:text-emerald-500 after:[content=''] after:block after:h-[2px] after:bg-blue-500 hover:after:bg-emerald-500 after:transition-all after:rounded ${
                isActive ? "after:w-full" : "after:w-0"
              } hover:after:w-full`
            }
            to={"about"}
          >
            About
          </NavLink>
        </div>
        {user.email ? (
          <div className="w-10 h-10 border border-neutral-500 rounded-full relative grid place-content-center group">
            <FaUser className="text-xl" />
            <div className="absolute invisible -translate-y-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 top-1/2 right-1/2 w-max text-center shadow bg-white px-4 py-3 rounded">
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
            className="font-bold border rounded px-5 py-2 w-24 bg-blue-500 hover:bg-emerald-500 transition-all text-white"
            onClick={() => setDisplay((prev) => !prev)}
          >
            {account ? "Login" : "Signup"}
          </button>
        )}
      </nav>
    </header>
  );
}
