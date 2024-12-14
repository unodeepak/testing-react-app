import { useRef, useState } from "react";

const Throttling = () => {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  const numRef = useRef(null);

  const throttling = () => {
    if (!numRef.current) {
      numRef.current = setTimeout(() => {
        setNum1(num1 + 1);
        console.log({ num, num1 });
        numRef.current = null;
      }, 5000);
    }
  };

  const updateNumber = (e) => {
    setNum(num + 1);
    throttling();
  };
  return (
    <>
      <div>
        <div>
          <button onClick={updateNumber}>Click me & add 1</button>
        </div>
        <br />
        <br />
        <div>
          <div>How many Clicks: {num}</div>
          <div>How many API Call: {num1}</div>
        </div>
      </div>
    </>
  );
};

export default Throttling;
