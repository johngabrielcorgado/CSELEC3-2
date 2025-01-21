import React, { useState } from 'react'; 

import { AppContainer, InputField, AddButton, TodoItem, DeleteButton } from './components/Styledcomponents'; 

  

const TodoApp = () => { 

  // ES6 array destructuring to use state 

  const [todos, setTodos] = useState([]); 

  const [newTodo, setNewTodo] = useState(''); 

  

  // Function to add a new to-do 

  const addTodo = () => { 

    if (newTodo.trim() !== '') { 

      setTodos([ 

        ...todos, 

        { id: Date.now(), text: newTodo, completed: false } 

      ]); 

      setNewTodo(''); 

    } 

  }; 

  

  // Function to toggle completion of a to-do 

  const toggleComplete = (id) => { 

    setTodos(todos.map(todo =>  

      todo.id === id ? { ...todo, completed: !todo.completed } : todo 

    )); 

  }; 

  

  // Function to delete a to-do 

  const deleteTodo = (id) => { 

    setTodos(todos.filter(todo => todo.id !== id)); 

  }; 

  

  return ( 

    <AppContainer> 

      <h1>To-Do List</h1> 

      <div> 

        <InputField  

          type="text"  

          value={newTodo}  

          onChange={(e) => setNewTodo(e.target.value)}  

          placeholder="Enter a new to-do" 

        /> 

        <AddButton onClick={addTodo}>Add To-Do</AddButton> 

      </div> 

      <div> 

        {todos.map(todo => ( 

          <TodoItem key={todo.id} completed={todo.completed}> 

            <span  

              onClick={() => toggleComplete(todo.id)}  

              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }} 

            > 

              {todo.text} 

            </span> 

            <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton> 

          </TodoItem> 

        ))} 

      </div> 

    </AppContainer> 

  ); 

}; 

  

export default TodoApp; 

 