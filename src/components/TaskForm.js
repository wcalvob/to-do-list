import React, { useState } from "react";

const TaskForm = (props) => {
  const [inputText, setInputText] = useState("");
  const [validation, setValidation] = useState(true);

  const handleForm = (e) => {
    setInputText(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== "") {
      props.newTask(inputText);
      setInputText("");
      setValidation(true);
    } else {
      setValidation(false);
    }
  };

  return (
    <div className="taskform">
      <h4>Ingresar tareas manualmente:</h4>
      <form className="form" onSubmit={submit}>
        <textarea
          className="form-control my-2"
          value={inputText}
          onChange={handleForm}
          placeholder="Ingrese la tarea"
          required
        ></textarea>
        <button className="btn btn-warning rounded-pill m-2">Añadir</button>
      </form>

      {!validation && <div className="validation">Debe añadir una tarea.</div>}
    </div>
  );
};

export default TaskForm;
