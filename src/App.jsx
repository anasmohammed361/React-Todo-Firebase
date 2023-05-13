import { useState,useEffect } from "react";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";
const App = () => {
  document.body.classList.add("bg-[#181820]");
  const [todos,setTodos] = useState(()=>{
    const todosLocal = localStorage.getItem('todos') 
    if(todosLocal){
      return JSON.parse(todosLocal) ? JSON.parse(todosLocal) : []
    }else{
      return []
    }
  });
// Effect hook
  useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])


  function addTodo(title,content) {
    const data = {
      title,
      content,
      done:false,
      id: crypto.randomUUID()
    }
    setTodos(currentTodo=>{
      return [...currentTodo,data]
    })
  }
  function deleteTodo(id){
     setTodos(currentTodo=>{
      return currentTodo.filter(elem=> elem.id !== id)
     })
  }
  function markAsDone(id) {
    setTodos(currentTodo=>{
      return currentTodo.map(item=>{
        if(item.id === id){
          const done = item.done;
          return {...item,done:!done}
        }
        return item
      })
    })
  }
  return (
    <main className="max-w-2xl  mx-auto mt-12">
      <TodoList todoList={todos} markAsDone={markAsDone} deleteTodo={deleteTodo} />
      <NewTodoForm addTodo={addTodo} />
    </main>
  )
}

export default App