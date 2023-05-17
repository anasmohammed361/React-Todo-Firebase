import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { createContext } from "react"
import Home from "./routes/Home";
import Signup from "./routes/Signup";
import Login from "./routes/Login";
import { auth } from "./lib/scripts/auth/auth";
import Root from "./routes/Root";

export  const AuthContext = createContext()

const App = () => {
  const [user,loading] = useAuthState(auth);
  return (
    <Router>
        <AuthContext.Provider value={{user,loading}}>
      <Routes>
          <Route path="/"  element={ <Root/> } />
          <Route path="/home" element={ <Home/>}/>
          <Route path="/signup" element={ <Signup/>} />
          <Route path="/login" element={ <Login/>} />
      </Routes>
        </AuthContext.Provider>
    </Router>  
  )
}

export default App