import React from "react";
import ColorBox from "./ColorBox";
import Form from "./Form";
import ColorContextProvider from "../contexts/ColorContext";

const App = () => {
  return (
    <div>
      <ColorContextProvider>
        <Form />
        <ColorBox />
      </ColorContextProvider>
    </div>
  );
};

export default App;
