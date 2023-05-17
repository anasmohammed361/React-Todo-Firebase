import { useContext } from "react";
import NewTodoForm from "../lib/components/NewTodoForm";
import TodoList from "../lib/components/TodoList";
import { signOut } from "../lib/scripts/auth/auth";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";
import Loading from "../lib/components/Loading";
const Home = () => {
  const { user, loading:loadingUser } = useContext(AuthContext);
  document.body.classList.add("bg-[#181820]");
  const handleSignout =async () => {
    try {
      await signOut();
    } catch (error) {
      console.log(error);
    }
  }
  return (
  (
      loadingUser ? 
        <Loading />
      : <>
      {
        user? <>
        <main className="max-w-2xl  mx-auto mt-12">
        <TodoList />
        <NewTodoForm />
        <button onClick={handleSignout}  className="mx-auto  my-6 py-4 px-8 rounded-lg text-white block bg-[#272732] ">Signout</button>
      </main>
        </> : <Navigate to={"/login"} />
      }
      
      </>
  )
  )
}

export default Home