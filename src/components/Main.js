import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, emptyCart } from "../redux/action";
const Main = (props) => {
  const dispatch = useDispatch();
  const product = {
    name: "iphone",
    price: 100,
    category: "mobile",
    color: "red",
  };
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
      >
        Add to Cart
      </button>
      <button onClick={() => dispatch(removeFromCart())}>
        Remove from Cart
      </button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
    </div>
  );
};
export default Main;
