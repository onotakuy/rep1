function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { text: input, id: Date.now(), completed: false }]);
    setInput('');
  };

  const toggleTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
