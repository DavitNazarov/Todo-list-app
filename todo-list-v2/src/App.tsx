import { Header } from '@/components/Header/Header';

import appStyle from './App.module.css';
import { TodoPanel } from '@/components/TodoPanel/TodoPanel';
import { Todolist } from '@/components/Todolist/Todolist';
import { TodoProvider } from './utils';


export const App = () =>  (
  
    <TodoProvider>
      <div className={appStyle.app_container}>
        <div className={appStyle.todo_conteiner}> 
          <Header /> 
          <TodoPanel mode='add'/>  
          <Todolist />
        </div>
      </div>
    </TodoProvider>

)

export default App
