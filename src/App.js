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

  return (
    <div className="App">
      <TaskForm newTask={newTask} />
      {listTask.map((e, index) => (
        <Task task={e} selectTask={selectTask} id={index} />
      ))}
    </div>
  );
}

export default App;
