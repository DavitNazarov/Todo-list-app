import React from "react";
import headerStyle from "@/components/Header/Header.module.css"
import { useTodo } from "@/utils";


export const Header: React.FC = () =>{
const {todos } = useTodo() 
return(
  <div className={headerStyle.header_conteiner}>
    <div className={headerStyle.header_title}>
      Todo list <b>{todos.length}</b> task (s)
     </div>
  </div>
)
} 
  

