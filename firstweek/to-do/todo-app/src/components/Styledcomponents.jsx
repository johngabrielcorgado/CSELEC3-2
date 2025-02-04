import styled from 'styled-components'; 

  

// A basic styled container for the whole app 

export const AppContainer = styled.div` 

  font-family: 'Poppins', sans-serif;
  padding: 20px;

  background-color: #f3e5f5;

  min-height: 100vh;
  
  display: flex;
  
  flex-direction: column;
  
  justify-content: center;
  
  align-items: center;
  
  text-align: center;
  
  color: #9370db;

`; 

  

// Styled input field for adding new to-dos 

export const InputField = styled.input` 

  padding: 10px; 

  font-size: 1rem; 

  width: 250px; 

  margin-bottom: 10px; 

  border: 1px solid #ccc; 

  border-radius: 4px; 

  font-family: 'Poppins', sans-serif;

  color: #9370db;

`; 

  

// Styled button for adding new to-dos 

export const AddButton = styled.button` 

  padding: 10px; 

  font-size: 1rem; 

  background-color: #9370db; 

  color: white; 

  border: none; 

  border-radius: 4px; 

  cursor: pointer; 

  margin-left: 15px;

  font-family: 'Poppins', sans-serif;

   

  &:hover { 

    background-color: #4a2574; 

  } 

`; 

  

// Styled list item for each to-do 

export const TodoItem = styled.div` 

  background-color: ${(props) => (props.completed ? '#d3ffd3' : '#fff')}; 

  padding: 10px; 

  border: 1px solid #ddd; 

  margin-bottom: 10px; 

  border-radius: 4px; 

  display: flex; 

  justify-content: space-between; 

  align-items: center; 

  font-weight: bold;

`; 

  

// Button to delete a to-do 

export const DeleteButton = styled.button` 

  background-color: #f44336; 

  color: white; 

  padding: 5px; 

  border: none; 

  border-radius: 4px; 

  cursor: pointer; 

  margin-left: 15px;

  font-family: 'Poppins', sans-serif;

   

  &:hover { 

    background-color: #4a2574; 

  } 

`; 

export const EditButton = styled.button` 
  background-color: #ff9800; 
  color: white; 
  padding: 5px; 
  border: none; 
  border-radius: 4px; 
  cursor: pointer; 
  margin-left: 15px;
  font-family: 'Poppins', sans-serif;
  
  
  &:hover { 
    background-color: #e68900; 
  }
`;