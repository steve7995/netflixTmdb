import React,{useState} from "react";
import { Link } from "react-router-dom";

const Login = () => {
const [rememberLogin,setRememberLogin] = useState(true);
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const hanldeformSubmit = (e)=>{
e.preventDefault();
console.log(email);
console.log(password)
}
  return (
    <div className="w-full h-screen ">
      <img
        className="hidden sm:block absolute w-full  h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />

      <div className="h-screen w-full bg-black/70 fixed top-0 left-0" />
      <div className="fixed w-full px-4 py-24 z-20">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/60 rounded-lg">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-nsans-medium">LogIn</h1>
            <form 

              onSubmit={hanldeformSubmit}
               className="w-full flex flex-col py-4">
              <input
                className="w-full bg-[#333] rounded p-3 my-2"
                type="email"
                placeholder="email"
                autoComplete="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                autoComplete="current-password"
                className="w-full bg-[#333] rounded p-3 my-2"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />

              <button className="bg-red-600 rounded font-nsans-medium py-3 my-6">
                Log In
              </button>

              <div className="flex justify-between items-center my-4 text-gray-600">
                <p>
                  <input type="checkbox" className="mr-2" 
                    checked={rememberLogin} onChange={(e)=> setRememberLogin(!rememberLogin)}/>
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>

              <p className="my-4 text-white/40">
                <span>New  to netflix?</span>
                <Link to="/signup" className="ml-1 text-white font-nsans-medium">
                  SignUp
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
