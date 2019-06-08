import React from "react";
import HeaderBox from "./components/HeaderBox";
import Newsfeed from "./components/Newsfeed";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderBox />
      </header>

      <Newsfeed/>

    </div>
  );
}

export default App;
