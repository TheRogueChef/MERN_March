import React, { useState } from 'react';
import './index.css';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
`;
const Text = styled.input`
  border: 2px solid #000;
  width: 200px;
  padding: 5px;
  border-radius: 2px;
  margin: 5px;
`;

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([ 
{
      task: '',
      complete: false,
    }
  ]);

const handleClick = () => {
  setTodoList((prev) => [
    ...prev,
    {
      task: input,
      complete: false,
    },
  ]);
  setInput("");
};

const handleCheckBox = (id) => {
    id.complete = !id.complete
  setTodoList([...todoList]);
};

const handleTodoDelete = (delIdx) => {
  var deleteIssue = todoList.filter(elem => (elem !== delIdx))
  console.log(deleteIssue)
  setTodoList(deleteIssue);

};

  return (
    <Container>
      <div>
          <h2>Todo List</h2>
          <Text value={input} onInput={ (event) =>setInput(event.target.value)}/>
          <Button onClick={ (event) => handleClick(event)}>Add</Button>
        <div>
          <ul>
            {
            todoList.map((todo, idx) => {
              return (
                <li
                style={{ textDecoration: todo.complete && "line-through"}}
                >
                    <input type='checkbox' onClick={() => handleCheckBox(todo)}/>
                    {todo.task}
                    <Button key={idx} onClick={() => handleTodoDelete(todo)}>Delete</Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
  }
export default App;
