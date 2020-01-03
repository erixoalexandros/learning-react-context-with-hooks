import React, { useState, useContext } from "react";
import { ColorContext } from "../contexts/ColorContext";

const Form = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const { onFormSubmit } = useContext(ColorContext);

  const handleForm = e => {
    e.preventDefault();
    onFormSubmit(term);
    setTerm("");
  };

  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        onChange={e => {
          setTerm(e.target.value);
        }}
        value={term}
      />
      <input type="submit" value="Change Color" />
    </form>
  );
};

export default Form;
