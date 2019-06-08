import React from "react";
import { Icon } from "semantic-ui-react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import PdfRekurs from "../documents/Rekurs.pdf";
import PdfGemeinde from "../documents/EntscheidGemeinde.pdf";

function Newsfeed() {
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem
        key="004"
        dateText="4. Juni 2019"
        dateInnerStyle={{ backgroundColor: "#A8B275" }}
        style={{ color: "#A8B275" }}
      >
        <h3>Salt hat Rekurs gegen den Entscheid eingereicht</h3>
        <p>
          Die Salt Mobile SA legt Rekurs ein. Die Einsprache wird vom Kanton neu
          geprüft.
        </p>
        <p>
          <a href={PdfRekurs} target="_blank" rel="noopener noreferrer">
            <Icon fitted name="file pdf" />
            Hier gehts zum Download der Dokumente als PDF.
          </a>
        </p>
      </TimelineItem>

      <TimelineItem
        key="003"
        dateText="6. Mai 2019"
        dateInnerStyle={{ backgroundColor: "#A8B275" }}
        style={{ color: "#A8B275" }}
      >
        <h3>Entscheid der Gemeinde Märstetten - Baugesuch abgelehnt</h3>
        <p>
          Das Baugesuch der Salt Mobile SA wurde aufgrund der Farbgebung von der
          Gemeinde Märstetten abgelehnt. Das Baugesuch wurde abgeweisen, die
          Baubewilligung wurde verweigert.
        </p>
        <p>
          Die Einsprecher beanstandeten, dass sich die Anlage in ihrer
          Erscheinung nicht in die Landschaft einpasse. Aus der Baueingabe liess
          sich die zukünftige Farbgebung der beantragten Elemente nicht
          einsehen. Da diesbezüglich trotz erneuten Nachfragen von der Gemeinde
          an die Gesuchsstellerin keine Antwort erfolgte, wurde die Einsprache
          als begründet erwiesen und diesbezüglich gutgeheissen.
        </p>
        <p>
          <a href={PdfGemeinde} target="_blank" rel="noopener noreferrer">
            <Icon fitted name="file pdf" /> Hier gehts zum Download der
            vollständigen Dokumente als PDF.
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
          <a
            href="http://arnis.ch/carina/Willkommen.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon fitted name="external square" /> Hier gehts zum Auszug des
            Zeitungsartikels.
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
          Im Mai 2018 wurde, nachdem die Salt Mobile SA das Baugesuch am 16. Mai
          für eine Mobilfunkantenne neben dem Gebäude der Druckerei Hess
          eingereicht hatte, die Sammeleinsprache in Märstetten gestartet.
        </p>
        <p>
          <a
            href="http://arnis.ch/carina/Sammeleinsprache.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon fitted name="external square" /> Hier gehts zum Wortlaut der
            Sammeleinsprache.
          </a>
        </p>
      </TimelineItem>
    </Timeline>
  );
}

export default Newsfeed;
