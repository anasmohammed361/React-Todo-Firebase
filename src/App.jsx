import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import { auth } from "./lib/scripts/auth/auth";
const App = () => {
  const [user,loading] = useAuthState(auth);
  console.log({user,loading});
  return (
    <Router>
      <Routes>
          <Route path="/home" element={ <Home/>}/>
          <Route path="/signup" element={ <Signup/>} />
          <Route path="/login" element={ <Login/>} />
      </Routes>
    </Router>  
  )
}

export default App