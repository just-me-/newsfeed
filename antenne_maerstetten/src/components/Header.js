import React from "react";
import { Parallax } from "react-parallax";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

function Header() {
  return (
    <Parallax
      bgImage={require('../header.JPG')}
      strength={400}
      renderLayer={percentage => (
        <div
          style={{
            position: "absolute",
            background: `rgba(255, 125, 0, ${percentage * 1})`,
            left: "50%",
            top: "50%",
            borderRadius: "50%",
            width: percentage * 500,
            height: percentage * 500
          }}
        />
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>renderProp</div>
      </div>
    </Parallax>
  );
}

export default Header;
