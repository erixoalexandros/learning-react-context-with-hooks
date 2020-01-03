import React, { createContext, useState } from "react";

export const ColorContext = createContext();

const ColorContextProvider = props => {
  const [color, setColor] = useState("blue");

  const onFormSubmit = newColor => {
    setColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ color, onFormSubmit }}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
