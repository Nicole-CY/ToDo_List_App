import React, { useState } from "react";
import Task from "./Task";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add Task"
      />
      <button onClick={addTask}>Add</button>

      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} onComplete={completeTask} />
        ))}
      </div>

      <div className="filters">
        <button onClick={() => setFilter("all")}>All Tasks</button>
        <button onClick={() => setFilter("active")}>Uncompleted</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <div className="task-list">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} onComplete={completeTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
