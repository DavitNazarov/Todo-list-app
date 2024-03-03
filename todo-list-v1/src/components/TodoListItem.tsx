import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo ,toggleTodo,   })  => {

  return( 
  <li>
    <label style={{textDecoration: todo.complete ? 'line-through' : undefined}}> 
      <input type="checkbox"  checked={todo.complete} onClick={() => {toggleTodo(todo)}} />{todo.text}
    </label>
    <MdEdit/><MdDelete/>
  </li>
  )
};

