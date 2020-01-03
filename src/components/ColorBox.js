import React, { useEffect, useRef, useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";

const style = {
  width: "250px",
  height: "250px",
  marginTop: "20px"
};

const ColorBox = () => {
  const colorBoxRef = useRef();
  const { color } = useContext(ColorContext);

  useEffect(() => {
    colorBoxRef.current.style.backgroundColor = color;
  });

  return <div ref={colorBoxRef} style={style}></div>;
};

export default ColorBox;
