/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { TodoItem } from './TodoItem/TodoItem'
import { TodoPanel } from '../TodoPanel/TodoPanel';
import { useTodo } from '@/utils';

export const Todolist : React.FC = () =>{
  const { todos ,todosIdForEditing  ,checkTodo ,deleteTodo ,selectTodoIdForEdit } = useTodo();
  return (
    <div>
        {todos.map(todo =>{
            if(todo.id === todosIdForEditing ) return <TodoPanel key={todo.id} mode='edit'  editTodo={{name:todo.name , description: todo.description}}/>

            return(
                <TodoItem key={todo.id} todo={todo} checkTodo={checkTodo} deleteTodo={deleteTodo} selectTodoIdForEdit={selectTodoIdForEdit}  />
            )
        })} 
    </div>
  )
} 