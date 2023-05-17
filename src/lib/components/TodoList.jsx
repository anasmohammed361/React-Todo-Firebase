import SingleTodoItem from "./SingleTodoItem";
import { useDocumentData } from "react-firebase-hooks/firestore"
import { doc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../App";
import { db } from "../scripts/database/database";
// eslint-disable-next-line react/prop-types
const TodoList = () => {
  const { user } = useContext(AuthContext)
    const [ value  ] = useDocumentData(doc(db,"users",user?.uid))
    const todoList = value?.data;
  return (
    <section className="bg-[#21212b] p-8 rounded-md space-y-10 todo-list">
      {
      // eslint-disable-next-line react/prop-types
      todoList?.length !== 0 ?
        // eslint-disable-next-line react/prop-types
        todoList?.map(elem=>
            <SingleTodoItem  key={elem.id} title={elem.title} content={elem.content} id={elem.id} done={elem.done}/>
        ) :
        <p className="text-white font-bold text-lg text-center">No items to display</p>
      }
   </section>
  )
}

export default TodoList
