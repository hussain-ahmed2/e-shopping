import { useEffect, useState } from "react";

export default function useUser() {
  const [users, setUsers] = useState(
    (localStorage.getItem("eUsers") &&
      JSON.parse(localStorage.getItem("eUsers"))) ||
      []
  );
  const [user, setUser] = useState(
    (localStorage.getItem("eUser") &&
      JSON.parse(localStorage.getItem("eUser"))) ||
      {}
  );
  const [account, setAccount] = useState(true);
  const [display, setDisplay] = useState(true);

  function findUser(req) {
    for (let u of users) {
      if (req.email === u.email) return true;
    }
    return false;
  }

  function validateUser(user) {
    const status = {
      email: false,
      password: false,
    };
    let currUser = {};
    for (let u of users) {
      if (user.email === u.email && user.password === u.password) {
        status.email = true;
        status.password = true;
        currUser = u;
        break;
      }
      if (user.email === u.email && user.password !== u.password) {
        status.email = true;
        break;
      }
    }
    return {status , currUser};
  }

  useEffect(() => {
    localStorage.setItem("eUsers", JSON.stringify(users));
    console.log(users);
  }, [users]);

  useEffect(() => {
    localStorage.setItem('eUser', JSON.stringify(user));
    console.log(user)
  }, [user]);

  return [users, setUsers, findUser, validateUser, user, setUser, account, setAccount, display, setDisplay];
}
