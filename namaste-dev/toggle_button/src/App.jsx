import "./App.css";
import { useToggle } from "./hooks/use-toggle";
function App() {
  const { isOn, toggle } = useToggle();
  return (
    <>
      <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button>
    </>
  );
}

export default App;
