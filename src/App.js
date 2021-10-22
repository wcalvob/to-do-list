import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  const [listTask, setListTask] = useState([]);

  const newTask = (task) => {
    setListTask([task, ...listTask]);
  };

  const selectTask = (id) => {
    const filteredList = listTask.filter((e, index) => index !== id);
    setListTask(filteredList);
  };

  const updateTask = (id, task) => {
    const updateList = listTask.map((e, index) => {
      if (index === id) {
        e = task;
      }
      return e;
    });
    setListTask(updateList);
  };

  return (
    <div className="App">
      <TaskForm newTask={newTask} />
      {listTask.map((e, index) => (
        <Task
          task={e}
          selectTask={selectTask}
          id={index}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
}

export default App;
