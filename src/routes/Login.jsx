import { useState } from "react"
import { logIn ,continueWithGoogle } from "../lib/scripts/auth/auth";
const Login = () => {
    const [name,setName]= useState("");
    const [password,setPassword] = useState("");
    const handleLogin =async () =>{
        try {
            if(name && password){
                await logIn(name,password);
            }else{
                console.log("No name or password");
            }
        } catch (error) {
            console.log(error);
        }
    }
return (
    <>
    <input type="email" value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Name"/>
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
    <button onClick={handleLogin}>Login</button>
    <button onClick={continueWithGoogle}>Continue with Google</button>
    </>
  )
}

export default Login