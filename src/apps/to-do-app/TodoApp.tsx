import React, { useState } from 'react'
import './style.css'
import InputField from './components/InputField'
import { Todo } from './components/models/models';
import TodoList from './components/TodoList';

const TodoApp: React.FC = () => {
 
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
    setTodos([...todos,{id: Date.now(), todo, isDone:false}]);
    setTodo("");
    }
  }
  // console.log(todos);

  return (
    <div className="TodoApp">
      <span className='heading'>To-Do-App</span>
      {/* <Header/> */}
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default TodoApp;