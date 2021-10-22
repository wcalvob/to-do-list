import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

function App() {
  const [listTask, setListTask] = useState([]);

  const newTask = (task) => {
    setListTask([task, ...listTask]);
  };

  return (
    <div className="App">
      <TaskForm newTask={newTask} />
      {listTask.map((e) => (
        <Task task={e} />
      ))}
    </div>
  );
}

export default App;
