import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
const styles = {
  removeButton: {
    padding: "5px 10px",
    fontSize: "14px",
    fontWeight: "bold",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };
  return (
    <Box
      className="todo-main-container"
      sx={{ minWidth: 240, maxWidth: 600, padding: "20px" }}
    >
      <Typography variant="h4" fontWeight={650} p={"15px"}>
        TODO List
      </Typography>
      <TextField
        size="small"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter Your Todo"
        sx={{ minWidth: 310, maxWidth: 600 }}
      ></TextField>
      <Box className="login-submit">
        <Button onClick={handleAddTodo} size="large" variant="contained">
          Add
        </Button>
      </Box>
      <Box border={"1px solid red"}
      minWidth={300}
      >
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="li-list-todo" >
                <div>{index+1}.</div>
              <div className="todo-list-text">{todo}</div>
              <Box>
              <CloseIcon onClick={handleRemoveTodo} className="todo-cancel" />
              </Box>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default Todo;
