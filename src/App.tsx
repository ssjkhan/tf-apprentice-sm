import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./store/counter/";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <div className="flex justify-between items-center px-24">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
      </div>
      <div className="border-white border-2 py-4">
        <div className="flex justify-between px-24 items-center">
          <div className="py-10">State Counter: {count}</div>
          <button
            className="px-12 py-10 border-teal-500 border-4"
            onClick={() => setCount((count) => count + 1)}
          >
            Click++
          </button>
        </div>
      </div>
      <Counter />
      <Counter />
    </>
  );
}

export default App;
