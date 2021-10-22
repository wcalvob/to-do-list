import React from "react";

const Task = (props) => {
  const deleteTask = () => {
    props.selectTask(props.id);
  };

  return (
    <div className="task">
      <span>{props.task}</span> <button>Editar</button>{" "}
      <button onClick={deleteTask}>Eliminar</button>
    </div>
  );
};

export default Task;
