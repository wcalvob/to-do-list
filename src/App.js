import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import ApiForm from "./components/ApiForm";
import Api from "./components/Api";

function App() {
  const [listTask, setListTask] = useState([]);
  const [listApi, setListApi] = useState([]);

  const newTask = (task) => {
    setListTask([task, ...listTask]);
  };

  const selectTask = (id) => {
    const filteredList = listTask.filter((e, index) => index !== id);
    setListTask(filteredList);
  };

  const selectApi = (id) => {
    const filteredList = listApi.filter((e, index) => index !== id);
    setListApi(filteredList);
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

  const updateApi = (id, task) => {
    const updateList = listApi.map((e, index) => {
      if (index === id) {
        e.fact = task;
      }
      return e;
    });
    setListApi(updateList);
  };

  const data = (e) => {
    setListApi(e, ...listApi);
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <TaskForm newTask={newTask} />
      <ApiForm data={data} />
      <div className="list-task">
        {listTask.map((e, index) => (
          <Task
            task={e}
            selectTask={selectTask}
            id={index}
            updateTask={updateTask}
            key={index}
          />
        ))}
      </div>
      <div className="list-task">
        {listApi.map((e, index) => (
          <Api
            task={e.fact}
            selectTask={selectApi}
            id={index}
            updateTask={updateApi}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
