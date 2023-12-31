import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateCount } from "../../store/cart";
import { toggleLike } from "../../store/produce";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    if (cart.hasOwnProperty(produce.id)) {
      const { count } = cart[produce.id];
      dispatch(updateCount(produce.id, count + 1));
    } else {
      dispatch(addToCart(produce.id));
    }
  };

  const cartItem = {};

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={() => dispatch(toggleLike(produce.id))}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          onClick={handleAddToCart}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
