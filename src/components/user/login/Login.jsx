import { useContext, useState } from "react";
import UserContext from "../UserConext"; 

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    pwd: false,
  });
  const { setUser, validateUser, setAccount, display, setDisplay, setCart } =
    useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    const registered = validateUser(userData);

    if (registered.status.email && registered.status.password) {
      setUser(registered.currUser);
      setCart(registered.currUser.cart || []);
    } else if (registered.status.email && !registered.status.password) {
      setError((prev) => ({ ...prev, pwd: true }));
    } else {
      setError((prev) => ({ ...prev, email: true }));
    }
  }

  function handleChange(event) {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function clearError(field) {
    setError((prev) => ({ ...prev, [field]: false }));
  }

  return (
    <div
      className={`fixed top-0 flex justify-center items-center flex-col h-screen w-full px-5 visible transition-all duration-300 backdrop-blur-sm ${
        display && "invisible"
      }`}
    >
      <div
        className={`max-w-[700px] w-full shadow-md border mx-auto p-5 relative rounded-md bg-indigo-100 transition-all opacity-1 duration-300 ${
          display && "-translate-y-20 opacity-0"
        }`}
      >
        <h1 className="text-4xl text-center font-semibold mb-5">Login</h1>
        <p
          className="absolute top-0 right-2 text-3xl cursor-pointer hover:text-red-500"
          onClick={() => setDisplay((prev) => !prev)}
        >
          &times;
        </p>
        <form className="flex flex-col" method="post" onSubmit={handleSubmit}>
          <label className="flex justify-between" htmlFor="email">
            Email
            <span
              className={`text-red-500 ${
                error.email ? "visible" : "invisible"
              }`}
            >
              Email is not registered
            </span>
          </label>
          <input
            className={`border-2 border-neutral-300 focus:outline-blue-500 px-3 py-1 rounded ${
              error.email && "border-red-500"
            }`}
            id="email"
            onChange={(event) => {
              handleChange(event);
              clearError("email");
            }}
            type="email"
            required
            name="email"
            placeholder="Enter your email"
          />
          <label className="flex justify-between" htmlFor="password">
            Password
            <span
              className={`text-red-500 ${error.pwd ? "visible" : "invisible"}`}
            >
              Password did not match
            </span>
          </label>
          <input
            className={`border-2 border-neutral-300 focus:outline-blue-500 px-3 py-1 rounded ${
              error.pwd && "border-red-500"
            }`}
            id="password"
            onChange={(event) => {
              handleChange(event);
              clearError("pwd");
            }}
            type="password"
            required
            name="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="border mt-3 py-1 rounded bg-blue-500 text-white hover:bg-emerald-500 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-2">
          Don{"'"}t have an account?{" "}
          <span
            className="font-semibold hover:underline text-blue-500 hover:text-emerald-500 cursor-pointer"
            onClick={() => setAccount((prev) => !prev)}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
