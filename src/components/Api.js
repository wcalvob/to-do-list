import React, { useState } from "react";
import "../App.css";

const Api = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [editText, setEditText] = useState("");
  const [taskDone, setTaskDone] = useState(false);

  const editTask = () => {
    setEditMode(true);
    setEditText(props.task);
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
        <div className={"task " + (taskDone ? "completed" : null)}>
          <span>{props.task}</span>
          <div className="options">
            <button
              onClick={editTask}
              className="btn btn-success py-0 rounded-pill"
            >
              Editar
            </button>
            <button
              onClick={deleteTask}
              className="btn btn-danger ms-2 py-0 rounded-pill"
            >
              Eliminar
            </button>
            <input
              type="checkbox"
              className="form-check-input ms-2"
              onClick={handleDone}
            />
          </div>
        </div>
      ) : (
        <div className="task">
          <form className="" onSubmit={submitEdit}>
            <textarea
              className="form-control"
              value={editText}
              onChange={handleEdit}
              placeholder="Ingrese la tarea"
            ></textarea>
            <button className="btn btn-warning mt-2 rounded-pill">
              Guardar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Api;
