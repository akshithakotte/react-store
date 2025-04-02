import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../App";
export default function Header() {
  const { user, setUser } = useContext(appContext);
  return (
    <div className="App-Header-Row">
      <div>React Store</div>
      <div>
        <Link to="home">Home</Link> |<Link to="cart">Cart</Link> |
        {user.email === "" ? (
          <Link to="login">Login</Link>
        ) : (
          <Link to="login" onClick={() => setUser({ ...user, email: "" })}>
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}