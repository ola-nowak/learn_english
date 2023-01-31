import "./styles.css";
import Animals from "./components/Animals";
import Fruits from "./components/Fruits";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Animals">Animals</NavLink>
          </li>
          <li>
            <NavLink to="/Fruits">Fruits</NavLink>
          </li>
          <li>
            <NavLink to="/Quiz">Quiz</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Animals" element={<Animals />}></Route>
        <Route exact path="/Fruits" element={<Fruits />}></Route>
        <Route exact path="/Quiz" element={<Quiz />}></Route>
      </Routes>
      {/* <div className="App"></div> */}
    </Router>
  );
}

export default App;
