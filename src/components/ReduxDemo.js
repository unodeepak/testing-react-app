import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";
import { increment, decrement } from "../redux/slices/counter/counter";
import ReduxCompo from "./ReduxCompo";

const About = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>About Us</h1>
      <p>This page contains information about our app and team.</p>
      <div>
        <div>Count: {count}</div>
      </div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <ReduxCompo />
    </div>
  );
};

export default About;
