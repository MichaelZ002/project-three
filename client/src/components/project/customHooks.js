import { useState, useEffect, useRef } from "react";
import API from "../../utils/API"

export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: event => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }

      return false;
    }
  };
};

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  const firstRender= useRef(true)

  useEffect(()=>{
    
    if(firstRender.current){
      console.log("happy saturday")
      firstRender.current = false
    }
    //update DB here
    else{
     API.updateProject(todos).then(res => {
       console.log(res)
     }).catch (error => {
       console.log(error)
     })
    }

  },[todos])
  return {
    todos,
    addTodo: text => {
      if (text !== "") {
        setTodos(
          todos.concat({
            text,
            checked: false
          })
        );
      }
    },
    checkTodo: idx => {
      setTodos(
        todos.map((todo, index) => {
          if (idx === index) {
            todo.checked = !todo.checked;
          }

          return todo;
        })
      );
    },
    removeTodo: idx => {
      setTodos(todos.filter((todo, index) => idx !== index));
    }
  };
};
