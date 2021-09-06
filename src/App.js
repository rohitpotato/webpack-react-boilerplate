import React, { lazy, Suspense } from "react";
import "./App.css";

// Example of Lazily loaded Component
const LazyLoadedFooter = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./Footer"));
    }, 10000);
  });
});

const App = () => {
  return (
    <>
      <h1 className="App">Webpack is configured!</h1>
      <Suspense fallback={"Loading"}>
        <LazyLoadedFooter />
      </Suspense>
    </>
  );
};

export default App;
