import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const appContext = createContext();
function App(props) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <appContext.Provider value={{ users, setUsers, user, setUser }}>
        <Header />
        <Routes>
          <Route index element={<Products />} />
          <Route path="home" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </appContext.Provider>
    </BrowserRouter>
  );
}
export default App;