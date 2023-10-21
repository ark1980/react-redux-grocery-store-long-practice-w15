import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cart";

function CartItem({ item }) {
  console.log("🚀 ~ file: CartItem.js:6 ~ CartItem ~ item:", item);
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input type="number" value={count} />
        <button className="cart-item-button">+</button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          -
        </button>
        <button className="cart-item-button">Remove</button>
      </div>
    </li>
  );
}

export default CartItem;
