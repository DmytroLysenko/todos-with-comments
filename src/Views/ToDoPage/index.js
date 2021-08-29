import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Layout from "../../components/Layout";
import ToDo from "../../components/ToDo";
import Comments from "../../components/Comments";

import * as LS from "../../utils/LocalStorageAPI";

export const MyContext = React.createContext("test");

export default function ToDoPage() {
  const [todos, setTodos] = useState([]);
  const [comments, setComments] = useState([]);
  const [activeTodoId, setActiveTodoId] = useState(
    todos.length ? todos[0].id : null
  );

  useEffect(() => {
    const data = LS.getData();
    if (data) {
      setTodos(data.todos);
      setComments(data.comments);
    }
  }, []);

  useEffect(() => {
    LS.saveData({ todos, comments });
  }, [todos, comments]);

  const handleDeleteTodo = (todoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const handleAddTodo = (todoText) => {
    setTodos((prev) => [...prev, { id: uuidv4(), text: todoText }]);
  };

  const handleAddComment = (commentText) => {
    if (!activeTodoId) return;
    setComments((prev) => [
      ...prev,
      { id: uuidv4(), text: commentText, todoId: activeTodoId },
    ]);
  };

  const handleSetActiveTodo = (todoId) => {
    setActiveTodoId(todoId);
  };

  return (
    <MyContext.Provider
      value={{
        todos,
        comments,
        activeTodoId,
        handleAddTodo,
        handleDeleteTodo,
        handleAddComment,
        handleSetActiveTodo,
      }}
    >
      <Layout>
        <ToDo />
        <Comments />
      </Layout>
    </MyContext.Provider>
  );
}
