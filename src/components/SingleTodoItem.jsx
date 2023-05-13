
// eslint-disable-next-line react/prop-types
const SingleTodoItem = ({title,content,done,id,deleteTodo,markAsDone}) => {
  console.log({title,content});
  return (
    <div className="flex item-center justify-between">
      <div>
        <p className={done ? "text-[#5e5e64] line-through":"text-[#5e5e64]"} >{title}</p>
        <h3 className={done ? "text-white line-through":"text-white" }>{content}</h3>
      </div>
        <div>
          <button onClick={()=>markAsDone(id)} className="mr-2 text-white bg-[#414052] px-3 py-2 rounded-lg">done</button>
          <button onClick={()=>deleteTodo(id)}>🗑️</button>
        </div>
    </div>
  )
}

export default SingleTodoItem