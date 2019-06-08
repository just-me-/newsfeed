import React from "react";
import { Parallax } from "react-parallax";
import { Header } from "semantic-ui-react";
import wappen from "../wappen.png";
import background from "../header.jpg";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

function HeaderBox() {
  return (
    <Parallax
      bgImage={background}
      strength={400}
      blur={{ min: -10, max: 20 }}
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            background: `rgba(168, 178, 117, ${(percentage - 0.5) * 5})`,
            left: "50%",
            marginLeft: percentage * -300,
            marginTop: percentage * -300,
            top: "50%",
            borderRadius: "50%",
            width: percentage * 600,
            height: percentage * 600
          }}
        >
          <div className="headerTitle" style={insideStyles}>
            <Header as="h1">Newsfeed Antenne Märstetten</Header>
          </div>
        </div>
      )}
    >
      <div style={{ height: 750 }}>
        <div className="headerFixed">
          <img src={wappen} alt="Märstetten" />
        </div>
      </div>
    </Parallax>
  );
}

export default HeaderBox;
