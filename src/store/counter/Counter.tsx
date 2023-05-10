import { useCounterStore } from "./";
import { useState } from "react";

export default function Counter() {
  const { count, increaseCount } = useCounterStore();
  const [count2, setCount2] = useState(0);

  console.log(count2, setCount2);

  // console.log(count, increaseCount);

  return (
    <div className="border-white border-2 py-4">
      <div className="flex items-center justify-between px-24">
        <div className="">Store Counter {count}</div>
        <div
          className="border px-5 py-10 border-2 border-purple-500 "
          onClick={increaseCount}
        >
          Increase Count
        </div>
      </div>
    </div>
  );
}
