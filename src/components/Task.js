import React, { useState } from "react";
import "../App.css";

const Task = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState("");
  const [taskDone, setTaskDone] = useState(false);

  const editTask = () => {
    setEditMode(true);
  };

  const handleEdit = (e) => {
    setEditText(e.target.value);
  };

  const handleDone = (e) => {
    setTaskDone(e.target.checked);
  };

  const submitEdit = (e) => {
    e.preventDefault();
    props.updateTask(props.id, editText);
    setEditText("");
    setEditMode(false);
  };

  const deleteTask = () => {
    props.selectTask(props.id);
  };

  return (
    <div>
      {!editMode ? (
        <div className="task">
          <input type="checkbox" onClick={handleDone} />
          <span className={taskDone ? "completed" : null}>{props.task}</span>
          <button onClick={editTask}>Editar</button>
          <button onClick={deleteTask}>Eliminar</button>
        </div>
      ) : (
        <form className="formEdit" onSubmit={submitEdit}>
          <input
            value={editText}
            onChange={handleEdit}
            placeholder={props.task}
          />
          <button>Guardar</button>
        </form>
      )}
    </div>
  );
};

export default Task;
