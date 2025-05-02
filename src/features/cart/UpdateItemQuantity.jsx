import { useDispatch, useSelector } from "react-redux";

import Button from "../../ui/Button";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";
import { getCurrentQuantityById } from "./cartSlice";

function UpdateItemQuantity({ id }) {
  const dispatch = useDispatch();
  const getCurrentQuantity = useSelector(getCurrentQuantityById(id));
  return (
    <div className="md: flex items-center gap-2 md:gap-4">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span>{getCurrentQuantity}</span>
      <Button
        type="round"
        onClick={() => {
          dispatch(increaseItemQuantity(id));
        }}
      >
        +
      </Button>
    </div>
  );
}
export default UpdateItemQuantity;
