import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Layout from "../../components/Layout";
import ToDo from "../../components/ToDo";
import Comments from "../../components/Comments";

const commentsList = [
  {
    id: 1,
    text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s",
  },
  {
    id: 2,
    text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s",
  },
  {
    id: 3,
    text: "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popularized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s",
  },
];

const todoList = [
  {
    id: 1,
    text: "First item with custom name",
  },
  {
    id: 2,
    text: "Second  item is active",
  },
  {
    id: 3,
    text: "Third  item is not active",
  },
];

export const MyContext = React.createContext("test");

export default function ToDoPage() {
  const [todos, setTodos] = useState(todoList);
  const [comments, setComments] = useState(commentsList);

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = (todoText) => {
    setTodos((prev) => [...prev, { id: uuidv4(), text: todoText }]);
  };

  const handleAddComment = (commentText) => {
    setComments((prev) => [...prev, { id: uuidv4(), text: commentText }]);
  };

  return (
    <MyContext.Provider
      value={{
        todos,
        comments,
        handleAddTodo,
        handleDeleteTodo,
        handleAddComment,
      }}
    >
      <Layout>
        <ToDo />
        <Comments />
      </Layout>
    </MyContext.Provider>
  );
}
