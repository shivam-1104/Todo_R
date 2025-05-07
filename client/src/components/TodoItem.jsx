const TodoItem = ({ todo, onDelete, onUpdate }) => {
    const handleToggleComplete = () => {
      onUpdate(todo._id, { completed: !todo.completed });
    };
  
    return (
      <div className="flex justify-between items-center bg-gray-100 p-3 my-2 rounded shadow">
        <span
          className={`text-lg ${
            todo.completed ? "line-through text-gray-500 font-semibold" : "text-black"
          }`}
        >
          {todo.title}
        </span>
        <div className="flex gap-2">
          <button
            onClick={handleToggleComplete}
            className={`px-2 py-1 rounded text-white ${
              todo.completed ? "bg-green-600" : "bg-blue-500"
            }`}
          >
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button
            onClick={() => onDelete(todo._id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            🗑
          </button>
        </div>
      </div>
    );
  };
  
  export default TodoItem;
  