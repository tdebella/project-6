import "./App.css";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import TopComp from "./Components/TopComp";
import BottomComp from "./Components/BottomComp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <TopComp />
        <BottomComp />
      </div>
    </div>
  );
}

export default App;
