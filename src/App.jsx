import UserContext from "./components/user/UserConext";
import useUser from "./components/user/useUser";
import Layout from "./components/router/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import About from "./components/about/About"
import Product from "./components/products/product/Product";
import ProductLayout from "./components/products/ProductLayout";
import Cart from "./components/cart/Cart";

function App() {
  const {
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
    handleQuantityDecrement
   } = useUser();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        findUser,
        validateUser,
        account,
        setAccount,
        display,
        setDisplay,
        cart,
        setCart,
        handleCart,
        handleCartRemove,
        handleQuantityIncrement,
        handleQuantityDecrement
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<ProductLayout />}> 
              <Route index element={<Products />} />
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
