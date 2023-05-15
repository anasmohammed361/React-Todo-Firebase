import {useState} from 'react'
import { signUp,continueWithGoogle } from '../lib/scripts/auth/auth';

const Signup = () => {
    const [name,setName]= useState("");
    const [password,setPassword] = useState("");

    const handleSignup = async () =>{
        if(name && password){
            await signUp(name,password)
        }else{
            console.log("Empty password or username");
        }
    }
  return (

    <>
     <input type="email" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='password'/>
    <button onClick={handleSignup}>Signup</button>
    <button onClick={continueWithGoogle}>Continue with Google</button>
    </>
  )
}

export default Signup