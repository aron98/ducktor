import './App.css';
import Home from "./Pages/Home/Home";
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={(
                <Home />
            )} />
            <Route path="/statistics" element={(
                <p>Statistics</p>
            )} />
            <Route path="/leaderboard" element={(
                <p>Leaderboard</p>
            )} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
