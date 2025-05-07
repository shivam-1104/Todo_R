import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, completed: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add your new todo"
        className="flex-1 p-2 rounded border"
      />
      <button type="submit" className="bg-purple-500 text-white px-4 rounded">
        +
      </button>
    </form>
  );
};

export default TodoForm;
