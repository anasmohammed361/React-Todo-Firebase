import { useContext } from "react"
import { AuthContext } from "../App"
import Loading from "../lib/components/Loading"
import { Navigate } from "react-router-dom"
import LoginComponent from "../lib/components/LoginComponent"
const Login = () => {
const { user ,loading } = useContext(AuthContext);
return (
      loading ? <Loading / > : 
    <>
     {user? < Navigate to={"/home"} /> : <LoginComponent /> }
    </>
    )
}

export default Login