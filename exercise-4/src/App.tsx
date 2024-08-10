import { useState } from 'react'
import './App.css'
import ToDo from './components/ToDo';

type ToDoType = {
  text: string;
  done: boolean;
}

const initialToDos: ToDoType[] = [
  { text: 'Buy milk', done: false },
  { text: 'Take out the trash', done: false },
  { text: 'Wash the dishes', done: false },
]

function App() {
  const [todos, setTodos] = useState<ToDoType[]>(initialToDos);
  const [text, setText] = useState('');

  const editText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const addTodo = () => {
    if (text.trim() === '') return;
    setTodos([...todos, { text, done: false }]);
    setText('');
  }

  const markTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  const editTodo = (index: number, text: string) => {
    const newTodos = [...todos];
    newTodos[index].text = text;
    setTodos(newTodos);
  }

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos
    );
  }

  return (
    <>
      <h2>ToDo List</h2>
      <input type="text" value={text} onChange={editText} />
      <button onClick={addTodo}>Add</button>
      {
        todos.map((todo, index) => (
          <ToDo
            key={index}
            title={todo.text}
            isDone={todo.done}
            onEdit={(text) => editTodo(index, text)}
            onDelete={() => deleteTodo(index)}
            markTodo={() => markTodo(index)}
          />
        ))
      }
    </>
  )
}

export default App
