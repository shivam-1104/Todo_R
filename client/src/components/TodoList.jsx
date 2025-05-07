import TodoItem from "./Todoitem";

const TodoList = ({ todos, onDelete, onUpdate }) => (
  <div className="mt-4">
    {todos.map((todo) => (
      <TodoItem
        key={todo._id}
        todo={todo}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    ))}
  </div>
);

export default TodoList;
