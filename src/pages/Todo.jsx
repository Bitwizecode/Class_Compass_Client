import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
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
    <Box height={"100vh"}>
      <Box
        className="todo-main-container"
        sx={{ minWidth: 230, maxWidth: 500, padding: "20px" }}
      >
        <Typography variant="h4" fontWeight={650} p={"15px"}>
          TODO List
        </Typography>
        <Box>
          <TextField
            size="small"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter Your Task Here..."
            sx={{ minWidth: 310, maxWidth: 600, mb: "20px" }}
          ></TextField>
          {todos.length > 0 && (
          <Box mt={"-12px"} sx={{ cursor: "pointer" }} display={"flex"} justifyContent={"space-between"}>
            <Typography className="todo-work" mt={0.5}>
              Today's Works
            </Typography>
            <Typography className="todo-work" mt={0.5}>
              Remove
            </Typography>
          </Box>
          )}
        </Box>
        <Box minWidth={300}>
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className="li-list-todo">
                <div>{index + 1}.</div>
                <div className="todo-list-text">{todo}</div>
                <Box>
                  <CloseIcon
                    sx={{ color: "red" }}
                    onClick={handleRemoveTodo}
                    className="todo-cancel"
                  />
                </Box>
              </li>
            ))}
          </ul>
        </Box>
        <Box className="login-submit">
          <Button onClick={handleAddTodo} size="small" variant="contained">
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Todo;
