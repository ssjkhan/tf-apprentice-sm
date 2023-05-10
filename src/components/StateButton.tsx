import { useState } from "react";

export default function StateButton() {
  const [count, setCount] = useState(0);

  return (
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
  );
}
