import { useEffect, useState } from "react";
import { getTasks, addTask, deleteTask, updateTask } from "../services/api";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await getTasks();
    setTodos(res.data);
  };

  const handleAdd = async (task) => {
    const res = await addTask(task);
    setTodos([...todos, res.data]);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTodos(todos.filter((t) => t._id !== id));
  };

  const handleUpdate = async (id, updatedData) => {
    const res = await updateTask(id, updatedData);
    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };


  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-400">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <TodoForm onAdd={handleAdd} />
        <TodoList todos={todos} onDelete={handleDelete} onUpdate={handleUpdate} />
        <div className="flex justify-between items-center mt-4">
          <p>You have {todos.length} pending tasks</p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
