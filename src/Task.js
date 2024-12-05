import React from "react";
import "./Task.css";

const Task = ({ task, onComplete }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span>{task.name}</span>
      <button onClick={() => onComplete(task.id)}>Done</button>
    </div>
  );
};

export default Task;
