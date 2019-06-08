import React, { useState } from "react";
import { Dimmer, Loader, Segment, Container, Header } from "semantic-ui-react";

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
      <Container text>
        <Header as="h2">Liebe Märstetter und Märstetterinnen</Header>
        <p>Herzlichen Dank, dass Sie sich an der Einsprache beteiligt haben.</p>
        <p>
          Auf dieser Website werden wir, die Einsprachevertretter, Sie
          fortlaufend auf dem aktuellsten Stand bezüglich der Baubewilligung für
          die Mobilefunkantenne der Salt Mobile SA am Schützlerweg halten.
        </p>
        <p>
          Ausserdem erhalten Sie so die Möglichkeit, selbst Einsicht in den
          Briefverkehr zu nehmen.
        </p>
        <p>
          Natürlich werden wir Sie erneut per Mail informieren, sobald ein
          abschliessender Beschluss bekannt gegeben wurde.
        </p>
      </Container>
      <footer>
        <Container>
          <p>
            Dies ist eine WUZA Realisation. Kontaktangaben, das Impressum und
            weitere rechtliche Angaben (unter anderem zu Cookies) erhältst Du
            auf{" "}
            <a href="https://wuza.ch/view/impressum">
              der Hauptseite von WUZA.ch
            </a>
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
