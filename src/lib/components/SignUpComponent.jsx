import {useState} from 'react'
import { signUp,continueWithGoogle } from '../scripts/auth/auth';
import logo from "../../../public/images/logo.png"
const SignUpComponent = () => {
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
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8"> 
            <div className="rounded  bg-white max-w-md  overflow-hidden shadow-xl p-14"> 
            <div>
				<img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
				<h2 className="mt-6 mb-14 text-center text-3xl font-extrabold text-gray-900">
					Sign Up to Cybernaut
				</h2>
			</div>
           
				<button onClick={async()=>await continueWithGoogle()} className="w-full max-w-xs font-bold shadow-lg mb-10  rounded-lg py-3 bg-gray-200 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline svelte-5h007k"><div className="bg-white dark:bg-gray-300 p-2 rounded-full"><svg className="w-4" viewBox="0 0 533.5 544.3"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"></path><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"></path><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"></path><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"></path></svg></div> <span className="ml-4">Sign Up with Google</span></button>
			
            <p className="text-sm text-gray-400 text-center mb-10">or cotinue with email</p>
            <div className="space-y-6">
					<div className="rounded-md shadow-sm space-y-px">
						<div className="grid gap-6">
							<div className="col-span-12">
								<label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Email</label>
								<input type="email" required name="username" id="first_name" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="email"  className="outline-none mt-1 p-2 block w-full sm:text-sm  focus:outline-2 focus:outline-indigo-700 focus:bg-white rounded-md" />
							</div>

							<div className="col-span-12">   
								<label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Password</label>
								<input required type="password" name="password" id="email_address" value={password} onChange={(e)=>setPassword(e.target.value)}  className="outline-none mt-1 p-2 block w-full  sm:text-sm focus:outline-2 focus:outline-indigo-700 focus:bg-white border-gray-300 rounded-md" />
							</div>
						</div>
					</div>
          <div>

						<button onClick={handleSignup} type="submit" className="hover:shadow shadow-lg group relative w-full flex mt-14 justify-center  p-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all">
							SignUp
						</button>
					</div>
					
					</div>
            </div>
            </div>
            </div>
    </>
  )
}

export default SignUpComponent