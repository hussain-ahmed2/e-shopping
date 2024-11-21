import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import User from "../user/User";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <>
      <User />
      <Header />
      <div className="pt-20 mx-auto max-w-screen-xl min-h-[calc(100vh-66px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
