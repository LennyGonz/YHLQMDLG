import React from 'react';
import ReactDOM from "react-dom";
import { Router } from "@reach/router"
import Home from './pages';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
