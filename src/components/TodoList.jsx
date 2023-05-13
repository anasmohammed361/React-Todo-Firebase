import SingleTodoItem from "./SingleTodoItem"
// eslint-disable-next-line react/prop-types
const TodoList = ({todoList,deleteTodo,markAsDone}) => {
    console.log(todoList);
  return (
    <section className="bg-[#21212b] p-8 rounded-md space-y-10 todo-list">
      {
      // eslint-disable-next-line react/prop-types
      todoList.length !== 0 ?
        // eslint-disable-next-line react/prop-types
        todoList.map(elem=>
            <SingleTodoItem deleteTodo={deleteTodo} markAsDone={markAsDone} key={elem.id} title={elem.title} content={elem.content} id={elem.id} done={elem.done}/>
        ) :
        <p className="text-white font-bold text-lg text-center">No items to display</p>
      }
   </section>
  )
}

export default TodoList
