import React, { useState } from "react";
import "../App.css";

const ApiForm = (props) => {
  const [value, setValue] = useState("");
  const url = "https://catfact.ninja/facts";

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const fetchData = async (e) => {
    e.preventDefault();
    setValue("");
    await fetch(url + "?limit=" + value)
      .then((response) => response.json())
      .then((json) => {
        props.data(json.data);
      });
  };

  return (
    <div className="taskform">
      <h4>Ingresar tareas aleatorias:</h4>
      <form className="form" onSubmit={fetchData}>
        <input
          className="form-control my-2"
          type="number"
          value={value}
          onChange={handleValue}
          placeholder="Ingrese la cantidad"
          required
        />
        <button className="btn btn-warning rounded-pill m-2">Añadir</button>
      </form>
    </div>
  );
};

export default ApiForm;
