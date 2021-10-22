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
    <div>
      <form className="form" onSubmit={submit}>
        <label>Ingresar tarea: </label>
        <input value={inputText} onChange={handleForm} />
        <button>Añadir</button>
      </form>
      {!validation && <div className="validation">Debe añadir una tarea.</div>}
    </div>
  );
};

export default TaskForm;
