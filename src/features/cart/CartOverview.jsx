import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) return null;
  return (
    <div className="text text-upper base flex justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>${totalCartPrice}</span>
        <span>{totalCartQuantity} pizzas</span>
      </p>
      <Button to={"/cart"}>Open Cart</Button>
    </div>
  );
}

export default CartOverview;
