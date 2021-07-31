import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  function TaskFormSubmit(task) {
    setTasks([...tasks, task]);
  }
  function DeleteTask(text) {
    setTasks(tasks.filter(task => task.text !== text));
  }
  const visibleTasks = tasks.filter(task => selectedCategory === "All" || task.category === selectedCategory);
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES.filter(item => item !== "All")} onTaskFormSubmit={TaskFormSubmit} />
      <TaskList tasks={visibleTasks} onDeleteTask={DeleteTask} />
    </div>
  );
}

export default App;
