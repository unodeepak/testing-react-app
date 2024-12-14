import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";
import { increment, decrement } from "../redux2/slices/counter";

// cart, userId
const IncDec = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Counter value is : {count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};
export default IncDec;
