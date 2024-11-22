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

  const [cart, setCart] = useState(user.cart || []);

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
    return { status, currUser };
  }

  function handleCart(product) {
    const {id} = product;
    if (!cart.find((p) => p.id === id)) {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      setCart((prev) =>
        prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
      );
    }
  }

  function handleCartRemove(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function handleQuantityIncrement(id) {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  }

  function handleQuantityDecrement(id) {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
    );
  }

  useEffect(() => {
    localStorage.setItem("eUsers", JSON.stringify(users));
    console.log(users);
  }, [users, cart]);

  useEffect(() => {
    localStorage.setItem("eUser", JSON.stringify(user));
    console.log(user);
  }, [user]);

  useEffect(() => {
    setUser((prev) => ({ ...prev, cart: cart }));
    setUsers((prev) =>
      prev.map((u) => (u.email === user.email ? { ...u, cart: cart } : u))
    );
    console.log(cart);
  }, [cart]);

  return {
    users,
    setUsers,
    findUser,
    validateUser,
    user,
    setUser,
    account,
    setAccount,
    display,
    setDisplay,
    cart,
    setCart,
    handleCart,
    handleCartRemove,
    handleQuantityIncrement,
    handleQuantityDecrement,
  };
}
