import { useContext } from "react"
import { AuthContext } from "../App"
import Loading from "../lib/components/Loading"
import SignUpComponent from "../lib/components/SignUpComponent"
import { Navigate } from "react-router-dom"
const Signup = () => {
  const { user ,loading } = useContext(AuthContext);
  return (
    (
      loading ? <Loading / > : 
    <>
     {user? < Navigate to={"/home"} /> : <SignUpComponent /> }
    </>
    )
  )
}

export default Signup