import React from "react";
import "./Products.css";
import { appContext } from "../App";
import { useContext } from "react";
export default function Products() {
  const { user,products, cart, setCart } = useContext(appContext);
  const addToCart = (id) => {
    setCart({...cart, [id]:1});
  };
  return(
  <>
    <h3>Hello {user?.name || "Guest"} !!!</h3>
    <div className="App-Products-Row">
      {products.map((value, index) => (
        <div key={index} className="App-Products-Box">
          <h3>{value.name}</h3>
          <h4>{value.price}</h4>
          <button onClick={() => addToCart(value.id)}>Add to Cart</button>
        </div>
      ))}
    </div>
    ;
  </>
  )
}