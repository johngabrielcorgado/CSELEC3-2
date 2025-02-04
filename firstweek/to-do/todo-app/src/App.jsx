import React, { useState } from 'react'; 
import { AppContainer, InputField, AddButton, TodoItem, DeleteButton } from './components/Styledcomponents'; 

const TodoApp = () => { 
  const [todos, setTodos] = useState([]); 
  const [newTodo, setNewTodo] = useState(''); 

  // Function to add a new to-do 
  const addTodo = () => { 
    if (newTodo.trim() !== '') { 
      setTodos([ 
        ...todos, 
        { id: Date.now(), text: newTodo, completed: false, isEditing: false } 
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

  // Function to toggle edit mode for a task 
  const toggleEdit = (id) => { 
    setTodos(todos.map(todo =>  
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo 
    )); 
  };

  // Function to update the text of a to-do 
  const updateTodoText = (id, newText) => { 
    setTodos(todos.map(todo =>  
      todo.id === id ? { ...todo, text: newText } : todo 
    )); 
  };

  // Function to save the edited task 
  const saveTodo = (id) => { 
    setTodos(todos.map(todo =>  
      todo.id === id ? { ...todo, isEditing: false } : todo 
    )); 
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
            {todo.isEditing ? (
              <>
                <InputField 
                  type="text" 
                  value={todo.text} 
                  onChange={(e) => updateTodoText(todo.id, e.target.value)} 
                /> 
                <AddButton onClick={() => saveTodo(todo.id)}>Save</AddButton> 
              </>
            ) : (
              <>
                <span  
                  onClick={() => toggleComplete(todo.id)}  
                  style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }} 
                > 
                  {todo.text} 
                </span> 
                <AddButton onClick={() => toggleEdit(todo.id)}>Edit</AddButton> 
              </>
            )}
            <DeleteButton onClick={() => deleteTodo(todo.id)}>Delete</DeleteButton> 
          </TodoItem> 
        ))} 
      </div> 
    </AppContainer> 
  ); 
}; 

export default TodoApp;