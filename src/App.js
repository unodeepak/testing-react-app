import React, { useState, useRef, useCallback, Suspense } from "react";
// import About from "./components/ReduxDemo";

// const LazyLoading1 = React.lazy(() => import("./components/LazyLoading1"));
// import Throttling1 from "./components/Throttling1";
import IncDec from "./components/IncDec";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navebar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <IncDec />
      <About /> */}
      {/* <About /> */}
      {/* <Throttling1 /> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <LazyLoading1 />
      </Suspense> */}
    </div>
  );
}

export default App;
