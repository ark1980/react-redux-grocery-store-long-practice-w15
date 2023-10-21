import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cart";

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(produce.id));
  };

  const cartItem = {};

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button className={"like-button" + (produce.liked ? " selected" : "")}>
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
