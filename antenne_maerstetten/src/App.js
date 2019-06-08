import React, { useState } from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

import HeaderBox from "./components/HeaderBox";
import Newsfeed from "./components/Newsfeed";

import "./App.css";
import background from "./header.jpg";

function App() {
  const [loading, setLoading] = useState(true);

  return loading ? (
    <div className="Loading">
      <Segment>
        <Dimmer active inverted page>
          <Loader size="large">Website wird geladen...</Loader>
        </Dimmer>
      </Segment>
      <img
        style={{ display: "none" }}
        src={background}
        alt="Loading..."
        onLoad={() => setLoading(false)}
      />
    </div>
  ) : (
    <div className="App">
      <header className="App-header">
        <HeaderBox />
      </header>
      <Newsfeed />
    </div>
  );
}

export default App;
