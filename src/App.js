import "./App.css";
import { useSelector } from "react-redux";
import Board_component from "./components/Board_component";

function App() {
  const state = useSelector((state) => state);
  console.log(state);
  return (
    <div className="App">
      <Board_component />
    </div>
  );
}

export default App;
