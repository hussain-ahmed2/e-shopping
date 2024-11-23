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

  // Check if user exists in the users list
  function findUser(req) {
    return users.some((u) => req.email === u.email);
  }

  // Validate user login credentials
  function validateUser(user) {
    const currUser = users.find((u) => u.email === user.email);
    if (currUser && currUser.password === user.password) {
      return { status: { email: true, password: true }, currUser };
    } else if (currUser) {
      return { status: { email: true, password: false }, currUser };
    }
    return { status: { email: false, password: false }, currUser: {} };
  }

  // Handle cart update
  function handleCart(product, quantity) {
    const { id } = product;
    setCart((prev) => {
      const existingProduct = prev.find((p) => p.id === id);
      if (existingProduct) {
        return prev.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prev, { ...product, quantity }];
    });
  }

  // Handle product removal from cart
  function handleCartRemove(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  // Handle cart quantity increment
  function handleQuantityIncrement(id) {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  }

  // Handle cart quantity decrement
  function handleQuantityDecrement(id) {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
    );
  }

  // Sync cart and user data with localStorage
  useEffect(() => {
    localStorage.setItem("eUsers", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem("eUser", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (cart !== user.cart) {
      setUser((prev) => ({ ...prev, cart }));
      setUsers((prev) =>
        prev.map((u) => (u.email === user.email ? { ...u, cart } : u))
      );
    }
  }, [cart, user.email]);

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
