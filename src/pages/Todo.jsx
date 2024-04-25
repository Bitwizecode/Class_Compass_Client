import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Todosvg from "../assets/icon/todo_svg.svg";
import TodoLogo from "../assets/icon/todo_logo.png";
import Layout from "../components/Layout";

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
    <Layout isBack title={"Todo List"}>
    <Box height={"100vh"} display={"flex"} justifyContent={"center"} alignItems={"center"} >
      <Box
        className="todo-main-container"
        sx={{ minWidth: 230, maxWidth: 500, padding: "20px" }}
      >
        <Typography variant="h4" fontWeight={650} p={"15px"}>
          Todo <img src={TodoLogo} style={{ width: "29px" }} />
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
        </Box>
        <Box height={"300px"} overflow={"auto"} >
          {todos.length > 0 ? (
            <Box
              mt={"0px"}
              sx={{ cursor: "pointer" }}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography className="todo-work" mt={0.5}>
                Today's Works
              </Typography>
              <Typography className="todo-work" mt={0.5} paddingRight={"7px"}>
                Remove
              </Typography>
            </Box>
          ) : (
            <img src={Todosvg} style={{marginTop: "30px"}} />
          )}
          <Box minWidth={300}  className= "todo-works">
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
        </Box>
        <Box className="login-submit">
          <Button onClick={handleAddTodo} size="small" variant="contained">
            Add
          </Button>
        </Box>
      </Box>
    </Box>
    </Layout>
  );
}


export default Todo;
