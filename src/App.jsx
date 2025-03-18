import { useState } from "react";
import reactLogo from "./assets/react.svg";
import reactRouterLogo from "./assets/react-router.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterButton from "./components/CounterButton";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Details from "./components/Details";
import Edit from "./components/Edit";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://reactrouter.com/" target="_blank">
          <img
            src={reactRouterLogo}
            className="logo reactrouter"
            alt="React Router logo"
          />
        </a>
      </div>
      <h1>Vite + React + React Router Library</h1>
      <div className="card">
        <CounterButton count={count} setCount={setCount} />
      </div>

      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/edit">Edit</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <Routes>
            <Route path="/" element={<Details count={count} />} />
            <Route path="/edit" element={<Edit setCount={setCount} />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
