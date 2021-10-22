import React from "react";

const Task = (props) => {
  return (
      <div className="task">
        <span>{props.task}</span> <span>Editar</span> <span>Eliminar</span>
      </div>
  );
};

export default Task;
