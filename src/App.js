import './App.css';
import Home from "./Pages/Home/Home";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <div>Felso Bar</div>
        <Routes>
            <Route path="/" element={(
                <Home />
            )} />
        </Routes>
        <div>Also Bar</div>
    </div>
  );
}

export default App;
