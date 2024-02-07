import './App.css';
import { useState } from 'react';
import { Todo } from './components/todo';
import { FormTodo } from './components/Form/FormTodo';
import { Search } from './components/search/Search';
import { Filter } from './components/filter/Filter';

export function App() {

  const [todos, setTodos] = useState(
    [   
    ]
  );

  const [search, setSearch] = useState('');
  const [filterSe, setFilter] = useState("all");
  const [ordem, setOrdem] = useState("ASC");
  const [labelbtn, serlabelBtn] = useState('Completar')

  const addTodo = (texto, categoria) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      texto,
      categoria,
      estaCompleta: false
    }];
    setTodos(newTodos);
  };

  const removerTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(
      (todo) => todo.id !== id
        ? todo : null
    );
    setTodos(filteredTodos);
  };
  const completarTodo = (id) => {
    const texto_completa = ['feita', "em progresso"];
    const newTodos = [...todos];
    newTodos.map(
      (todo) => todo.id === id
        ? todo.estaCompleta = !todo.estaCompleta
        : todo
    );

    setTodos(newTodos);

  }

  return (
    <div className="app">
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filterSe} setFilter={setFilter} setOrdem={setOrdem} />
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {
          todos.filter(
            (todo) => filterSe === "all"
              ? true
              : filterSe === "completed"
                ? todo.estaCompleta
                : !todo.estaCompleta
          ).filter(
            (todo) => todo.texto.toLowerCase().includes(search.toLowerCase())
          ).sort(
            (a, b) => ordem === "asc"
            ? a.texto.localeCompare(b.texto)
            : b.texto.localeCompare(a.texto)
            )
          .map((todo) => (
              <Todo key={todo.id} todo={todo} removerTodo={removerTodo} completarTodo={completarTodo} />
            ))
        }
      </div>
      <FormTodo addTodo={addTodo} />
    </div>
  )
}


