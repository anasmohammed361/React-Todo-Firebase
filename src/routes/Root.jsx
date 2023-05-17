import { useContext,useEffect } from "react"
import { AuthContext } from "../App"
import { useNavigate } from "react-router-dom"
const Root = () => {
    const { user , loading }  = useContext(AuthContext);
    const router = useNavigate();
    useEffect(()=>{
        if(!loading){
            if(user){
                router("/home")
            }else{
                router("/login")
            }
        }
    },[loading])
  return (
     <p>User is Loading</p>
  )
}

export default Root