import { useState } from "react";

const TodoItem = ({ todo, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const handleUpdate = () => {
    onUpdate(todo._id, { ...todo, title });
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 my-1 rounded">
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 p-1 mr-2 border rounded"
        />
      ) : (
        <span className="flex-1">{todo.title}</span>
      )}

      {isEditing ? (
        <button
          onClick={handleUpdate}
          className="bg-green-500 text-white px-2 py-1 rounded mr-2"
        >
          ✅
        </button>
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
        >
          ✏️
        </button>
      )}

      <button
        onClick={() => onDelete(todo._id)}
        className="bg-red-500 text-white px-2 py-1 rounded"
      >
        🗑
      </button>
    </div>
  );
};

export default TodoItem;
