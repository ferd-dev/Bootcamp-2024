import { useState } from 'react'
import './App.css'

type TodoType = {
  text: string;
  id: number;
  completed: boolean;
}

function App() {
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }

  const completedTask = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        text: inputText,
        id: todos.length + 1,
        completed: false
      }
    ]);

    setInputText('');
  }

  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleChange} />
      <br />
      <br />
      <button
        onClick={addTodo}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            className='card'
            key={todo.id}
            onClick={() => completedTask(todo.id)}>
            <p>{todo.text}</p>
            <input
              type="checkbox"
              checked={todo.completed} />
          </li>
        ))}
      </ul>

    </>
  )
}

export default App
