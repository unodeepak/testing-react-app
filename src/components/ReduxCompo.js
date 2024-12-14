import { useAppSelector } from "../redux/hooks/hook";

const ReduxCompo = () => {
  const count = useAppSelector((item) => item.counter);
  return (
    <div>
      <div>Counter value is : {count}</div>
    </div>
  );
};

export default ReduxCompo;
