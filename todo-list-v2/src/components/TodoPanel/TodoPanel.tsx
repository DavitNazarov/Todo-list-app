import React, { useState } from 'react'

import styles from "./TodoPanel.module.css";
import { Button } from '../Button/Button';
import { useTodo } from '@/utils';

interface AddTodoProps {
    mode:'add';
}
interface EditTodoProps {
    mode: 'edit';
    editTodo: Omit<Todo , 'id' | 'checked'>
}

const DEFAULT_TODO = {
    name: '',
    description:'',
}

type TodoPanelProps = AddTodoProps | EditTodoProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {

    const {changeTodo , addTodo} = useTodo()

    const idEdit = props.mode === 'edit' ;

    const [todo, setTodo] = useState(idEdit ? props.editTodo : DEFAULT_TODO)
    
    const onChange = (event : React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = event.target;
        setTodo({...todo , [name] : value})
    }
    const onClick = () => {
        const todoItem = {name: todo.name , description:todo.description}
        if (idEdit) {
            return changeTodo(todoItem)
        }
        addTodo(todoItem)
        setTodo(DEFAULT_TODO)
    }

    return (
        <div className={styles.todo_panel_container}>
            <div className={styles.fields_container}>
                <div className={styles.fields_container}>
                    <label htmlFor='name'>
                        <div>name</div>
                        <input type="text" id='name' value={todo.name} name='name' onChange={onChange}/>
                    </label>
                </div>
                <div className={styles.fields_container}>
                    <label htmlFor='description'>
                        <div>description</div>
                        <input type="text" id='description' value={todo.description} name='description' onChange={onChange} />
                    </label>
                </div>
                <div className={styles.fields_container}>   
                {!idEdit && <Button color='blue'onClick={onClick} > ADD</Button>}
                {idEdit && (<Button color='orange'onClick={onClick} > EDIT</Button>)}
                 
                </div>
            </div>
        </div>
  )
}
