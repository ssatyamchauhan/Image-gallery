import React, { useEffect, useState } from "react";
import JLayout from "justified-layout";
import "../../App.css";
/*
 * Make this component
 */
const Geometries = [
  0.5,
  1.5,
  1,
  1.8,
  0.4,
  0.7,
  0.9,
  1.1,
  1.7,
  2.2,
  1.5,
  0.5,
  1.5,
  1,
  1.8
];

export default function Gallery(props) {

  const [state, setState] = useState({
    containerWidth: 0,
    geometry: { boxes: [] }
  });

  let resizeGeometry = () => {
    let width = window.innerWidth - 16; // padding

    setState({
      ...state,
      containerWidth: width,
      geometry: JLayout(Geometries, { containerWidth: width })
    });
  };

  useEffect(() => {
    resizeGeometry();

    window.addEventListener("resize", resizeGeometry);
  }, []);

  let boxes = state.geometry.boxes.map((box, i) => {
    let style = {
      left: box.left,
      top: box.top,
      width: box.width,
      height: box.height
    };
    return (
      <img
        key={i}
        className="box"
        style={style}
        src={props.data[i].url}
        alt={props.data[i].alt}
      />
    );
  });

  return (
    <div
      className="wrapper"
      style={{
        height: state.geometry.containerHeight + "px",
        width: state.containerWidth + "px"
      }}
    >
      {boxes}
    </div>
  );
}
