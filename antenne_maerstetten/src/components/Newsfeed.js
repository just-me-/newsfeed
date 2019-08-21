import React from "react";
import { Icon } from "semantic-ui-react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import PdfRekurs from "../documents/Rekurs.pdf";
import PdfGemeinde from "../documents/EntscheidGemeinde.pdf";
import PdfBaurelgement from "../documents/Baureglement.pdf";
import PdfOrtsplanung from "../documents/VernehmlassungOrtsplanung.pdf";
import PdfFlyer from "../documents/Flyer5G_Infoabend.pdf";

function Newsfeed() {
  return (
    <Timeline lineColor={"#ddd"}>
      <TimelineItem
        key="006"
        dateText="30. August 2019"
        dateInnerStyle={{ backgroundColor: "#A8B275" }}
        style={{ color: "#A8B275" }}
      >
        <h3>Infoveranstaltung zu Mobilfunk und 5G</h3>
        <p>
          Die Interessengemeinschaft &laquo;Betroffene Bürger Bodensee&raquo;
          wird am Freitagabend in Märstetten einen Infoabend bezüglich Mobilfunk
          und 5G halten.
        </p>
        <p>
          Es werden verschiedene Kurzvorträge gehalten, unter anderem von einer
          Ärztin und einem Elektro-Ingenieur. Nutzen Sie diesen Abend, um einige
          Fakten und Studien zum Mobilfunk und seiner nächsten Generation 5G zu
          erfahren und allfällige Fragen zu stellen.
        </p>
        <p>
          <a href={PdfFlyer} target="_blank" rel="noopener noreferrer">
            <Icon fitted name="file pdf" />
            &nbsp;Hier gehts zum Download des Flyers als PDF.
          </a>
        </p>
      </TimelineItem>

      <TimelineItem
        key="005"
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
            &nbsp;Hier gehts zum Download der Dokumente als PDF.
          </a>
        </p>
      </TimelineItem>

      <TimelineItem
        key="004"
        dateText="31. Mai 2019"
        dateInnerStyle={{ backgroundColor: "#A8B275" }}
        style={{ color: "#A8B275" }}
      >
        <h3>Prävention weiterer Antennen in Wohngegenden</h3>
        <p>
          Damit künftig keine Mobilfunkantennen in Wohngegenden gebaut werden
          dürfen, muss das Baurelgement um entsprechende Vorschriften ergänzt
          werden.
        </p>
        <p>
          Wir setzen uns dafür ein, dass in Märstetten eine Positivplanung im
          Baureglement aufgenommen wird. Das heisst, dass die Gemeinde bestimmt,
          wo Mobilfunkantennen zulässig sind. In Märstetten müsste das die
          Zone&nbsp;I (Arbeitszone Industrie) sein.
        </p>
        <p>
          Nachfolgend finden Sie die Vernehmlassungsantwort der Einsprechenden
          zur Teilrevision der Ortsplanung von Märstetten.
        </p>
        <p>
          <a href={PdfBaurelgement} target="_blank" rel="noopener noreferrer">
            <Icon fitted name="file pdf" />
            &nbsp;Hier gehts zum angepassten Baureglement
          </a>
          {" und "}
          <a href={PdfOrtsplanung} target="_blank" rel="noopener noreferrer">
            <Icon fitted name="file pdf" />
            &nbsp;hier ist der Download der verfassten Vernehmlassung.
          </a>
        </p>
      </TimelineItem>

      <TimelineItem
        key="003"
        dateText="6. Mai 2019"
        dateInnerStyle={{ backgroundColor: "#A8B275" }}
        style={{ color: "#A8B275" }}
      >
        <h3>Entscheid der Gemeinde Märstetten &ndash; Baugesuch abgelehnt</h3>
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
            <Icon fitted name="file pdf" />
            &nbsp;Hier gehts zum Download der vollständigen Dokumente als PDF.
          </a>
        </p>
      </TimelineItem>

      <TimelineItem
        key="002"
        dateText="4. Juni 2018"
        dateInnerStyle={{ backgroundColor: "#A8B275" }}
        style={{ color: "#A8B275" }}
      >
        <h3>Einsprache erhoben &ndash; 500 gegen die Antenne</h3>
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
            <Icon fitted name="external square" />
            &nbsp;Hier gehts zum Auszug des Zeitungsartikels.
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
            <Icon fitted name="external square" />
            &nbsp;Hier gehts zum Wortlaut der Sammeleinsprache.
          </a>
        </p>
      </TimelineItem>
    </Timeline>
  );
}

export default Newsfeed;
