import { useCounterStore } from "./";

export default function Counter() {
  const { count, increaseCount } = useCounterStore();

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
