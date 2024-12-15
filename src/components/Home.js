import React from "react";
import ErrorBoundary from "./ErrorBoundry";

const Home = () => {
  return (
    <div>
      <Home1 msg={"hello"} />
    </div>
  );
};

const BuggyComponent = () => {
  throw new Error("I crashed!");
};

const Home1 = ({ msg }) => {
  return (
    <div>
      <h1>Msg is : {msg}</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default Home;
