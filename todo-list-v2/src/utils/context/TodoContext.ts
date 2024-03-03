import React from "react";

export interface TodoContextProps {
    todos:Todo[];
    todosIdForEditing:Todo['id'] | null;
    checkTodo:(id :Todo['id'])=> void;
    addTodo:({name, description} : Omit<Todo , 'checked' | 'id'>) => void;
    deleteTodo:(id :Todo['id'])=> void;
    changeTodo:({name, description} : Omit<Todo , 'checked' | 'id'>) => void;
    selectTodoIdForEdit:(id :Todo['id'])=> void;
}

export const TodoContext = React.createContext<TodoContextProps>({
    todos:[],
    todosIdForEditing:null,
    addTodo:()=>{},
    deleteTodo:()=>{},
    checkTodo:()=>{},
    changeTodo:()=>{},
    selectTodoIdForEdit:()=>{},
})
