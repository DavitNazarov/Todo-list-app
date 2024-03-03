import React from 'react'
import { TodoListItem } from './TodoListItem';
//! this code is create a todo list (item)  for the TodoListItem component
interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo}  />
      ))}
    </ul>
  );
};