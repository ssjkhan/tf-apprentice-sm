import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./store/counter/";
import StateButton from "./components/StateButton";
import "./App.css";

function App() {
  // const [state, setState] = useState({});

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
      <StateButton />
      <StateButton />
      <Counter />
      <Counter />
    </>
  );
}

export default App;
