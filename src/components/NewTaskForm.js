import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const initalForm = {
    text: "",
    category: "Code",
  };
  const [form, setForm] = useState(initalForm);
  function handelSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(form);
    setForm(initalForm);
  }
  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <form className="new-task-form" onSubmit={handelSubmit}>
      <label>
        Details
        <input type="text" name="text" value={form.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={form.category} onChange={handleChange}>
          {categories.map(cat => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
