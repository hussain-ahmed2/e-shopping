import { useContext, useState } from "react";
import UserContext from "../UserConext"; 

function Signup() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    cart: [],
  });
  const [error, setError] = useState({
    pwd: false,
    email: false,
  });

  const { setUser, setUsers, findUser, setAccount, setDisplay, display } =
    useContext(UserContext);

  function handleChange(event) {
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    if (error.email) setError((prev) => ({ ...prev, email: false }));
    if (error.pwd) setError((prev) => ({ ...prev, pwd: false }));
  }

  // Submit handler
  function handleSubmit(event) {
    event.preventDefault();

    // Check if passwords match
    if (userData.password !== event.target.cpassword.value) {
      setError((prev) => ({ ...prev, pwd: true }));
      return;
    }

    // Check if user already exists
    const registered = findUser(userData);
    if (registered) {
      setError((prev) => ({ ...prev, email: true }));
    } else {
      setUser(userData);
      setUsers((prev) => [...prev, userData]);
    }
  }

  return (
    <div
      className={`fixed top-0 flex justify-center items-center flex-col h-screen w-full px-5 visible transition-all duration-300 backdrop-blur-sm z-50 ${
        display && "invisible"
      }`}
    >
      <div
        className={`max-w-[700px] w-full shadow-md border mx-auto p-5 relative rounded-md bg-indigo-100 transition-all opacity-1 duration-300 ${
          display && "-translate-y-20 opacity-0"
        }`}
      >
        <h1 className="text-4xl text-center font-semibold mb-5">Sign Up</h1>

        <p
          className="absolute top-0 right-2 text-3xl cursor-pointer hover:text-red-500"
          onClick={() => setDisplay((prev) => !prev)}
        >
          &times;
        </p>

        <form className="flex flex-col" method="post" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            onChange={handleChange}
            className="border-2 border-neutral-300 focus:outline-blue-500 px-3 py-1 rounded"
          />

          <label htmlFor="email" className="flex justify-between">
            Email
            <span
              className={`text-red-500 ${
                error.email ? "visible" : "invisible"
              }`}
            >
              Email already exists
            </span>
          </label>
          <input
            id="email"
            onChange={handleChange}
            type="email"
            required
            name="email"
            placeholder="Enter your email"
            className={`border-2 border-neutral-300 focus:outline-blue-500 px-3 py-1 rounded ${
              error.email && "border-red-500"
            }`}
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            onChange={handleChange}
            type="password"
            required
            name="password"
            placeholder="Enter your password"
            className="border-2 border-neutral-300 focus:outline-blue-500 px-3 py-1 rounded"
          />

          <label htmlFor="cpassword" className="flex justify-between">
            Confirm Password
            <span
              className={`text-red-500 ${error.pwd ? "visible" : "invisible"}`}
            >
              Passwords did not match
            </span>
          </label>
          <input
            type="password"
            required
            name="cpassword"
            id="cpassword"
            placeholder="Re-enter your password"
            className={`border-2 border-neutral-300 focus:outline-blue-500 px-3 py-1 rounded ${
              error.pwd && "border-red-500"
            }`}
            onChange={handleChange}
          />

          <button
            className="border mt-3 py-1 rounded bg-blue-500 text-white hover:bg-emerald-500 transition-colors"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-2">
          Already have an account?{" "}
          <span
            className="font-semibold hover:underline text-blue-500 hover:text-emerald-500 cursor-pointer"
            onClick={() => setAccount((prev) => !prev)}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
