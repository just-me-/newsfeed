import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

function Newsfeed() {
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem
        key="004"
        dateText="???"
        dateInnerStyle={{ backgroundColor: "#A8B275" }}
        style={{ color: "#A8B275" }}
      >
        <h3>Salt hat Rekurs gegen den Entscheid eingereicht</h3>
        <p>...</p>
        <p>
          <a href="#" target="_blank">
            Hier gehts zum Download der Dokumente als PDF.
          </a>
        </p>
      </TimelineItem>

      <TimelineItem
        key="003"
        dateText="???"
        dateInnerStyle={{ backgroundColor: "#A8B275" }}
        style={{ color: "#A8B275" }}
      >
        <h3>Entscheid der Gemeinde Märstetten - Baugesuch abgelehnt</h3>
        <p>...</p>
        <p>
          <a href="#" target="_blank">
            Hier gehts zum Download der Dokumente als PDF.
          </a>
        </p>
      </TimelineItem>

      <TimelineItem
        key="002"
        dateText="4. Juni 2018"
        dateInnerStyle={{ backgroundColor: "#A8B275" }}
        style={{ color: "#A8B275" }}
      >
        <h3>Einsprache erhoben - 500 gegen die Antenne</h3>
        <p>
          Am Montag, 4. Juni konnten wir dem Gemeindepräsidenten 508
          Unterschriften überreichen. Für Märstetten eine gewaltige Zahl!
        </p>
        <p>
          <a href="http://arnis.ch/carina/Willkommen.html" target="_blank">
            Hier gehts zum Auszug des Zeitungsartikels.
          </a>
        </p>
      </TimelineItem>

      <TimelineItem
        key="001"
        dateText="22. Mai 2018"
        dateInnerStyle={{ backgroundColor: "#A8B275" }}
        style={{ color: "#A8B275" }}
      >
        <h3>Sammeleinsprache gestartet</h3>
        <p>
          Im Mai 2018 wurde, nachdem die Salt Mobile SA das Baugesuch am am 16.
          Mai für eine Mobilfunkantenne neben dem Gebäude der Druckerei Hess
          eingereicht hatte, die Sammeleinsprache in Märstetten gestartet.
        </p>
        <p>
          <a
            href="http://arnis.ch/carina/Sammeleinsprache.html"
            target="_blank"
          >
            Hier gehts Wortlaut der Sammeleinsprache.
          </a>
        </p>
      </TimelineItem>
    </Timeline>
  );
}

export default Newsfeed;
