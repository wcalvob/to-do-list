import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  const [listTask, setListTask] = useState([]);

  const newTask = (task) => {
    setListTask([task, ...listTask]);
  };

  return (
    <div className="App">
      <TaskForm newTask={newTask} />
    </div>
  );
}

export default App;
