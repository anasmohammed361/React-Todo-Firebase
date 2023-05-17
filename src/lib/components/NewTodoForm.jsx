import { useContext } from "react";
import { useState } from "react"
import { AuthContext } from "../../App";
import { addTodo } from "../scripts/database/database";
const NewTodoForm = () => {
  const { user } = useContext(AuthContext)
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");

  function handleSubmit(e) {
      e.preventDefault();
      if(title,content){
        addTodo(user.uid,title,content);
        setTitle("");
        setContent("");
      }
  }

  return (
    <form  >
    <div className="input-item flex flex-col bg-[#21212b] rounded-t-md p-5 mt-4">
    <label htmlFor="title" className="text-[#5e5e64] text-lg font-bold ">Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="title" className="bg-transparent  text-white focus:outline-none focus:ring-0 todo-input" placeholder="...." />
    <label htmlFor="content"  className="text-[#5e5e64] mt-4 text-lg font-bold ">Content</label>
    <input type="text" value={content} onChange={(e)=>setContent(e.target.value)}  name="content"  className="bg-transparent  text-white focus:outline-none focus:ring-0 todo-content" placeholder="...."/>
    </div>
    <button type="submit" onClick={handleSubmit} className="w-full bg-[#272732] p-3 rounded-b-md text-slate-100 transition-all add-btn">Add Todo</button>
  </form>
  )
}

export default NewTodoForm