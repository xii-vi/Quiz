import axios from "axios";
import { useReducer } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginReducer } from "../../reducer/authReducer";
import { useAuth } from "../../context/authContext";

export const Login = () => {
    const { authDispatch }= useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"; 
    const [{email,password},loginDispatch] = useReducer(loginReducer, {email:"", password:""});
    const testHandler=()=>[
    loginDispatch({type:"SET_EMAIL",payload:"adarshbalika@gmail.com"}),
    loginDispatch({type:"SET_PASSWORD",payload:"adarshBalika123"})
    ]
    console.log(from)
    const submitHandler= async (e, email, password)=>{
        e.preventDefault();
        try{
        const loginResponse = await axios.post("api/auth/login", {email,password});
        localStorage.setItem("encodedToken", loginResponse.data.encodedToken)
        localStorage.setItem('userData', JSON.stringify(loginResponse.data.foundUser));
        authDispatch({ type: "USER_LOGIN" })
        authDispatch({ type: "USER_TOKEN", payload: loginResponse.data.encodedToken })
        authDispatch({ type: "USER_DATA", payload: loginResponse.data.foundUser })
        navigate(from, {replace : true} )
    }catch(error){
        console.log(error.message);
    }
    }
    return( 
    <div className="flex justify-center py-8 h-screen">
        <form className="p-5 w-6/12" onSubmit={(e)=> submitHandler(e, email,password)}>
            <p className="text-5xl">Login</p>
            <div className="my-5 ">
                <div className="py-5 flex flex-col">
                    <small className="py-2">E-mail</small>
                    <input className="p-2 border-b-2" type="email" placeholder="username/e-mail" required value={email} onChange={(e)=> loginDispatch({type:"SET_EMAIL",payload:e.target.value})}/>
                </div>
                <div className="pb-5 flex flex-col">
                    <small className="pb-2">Password</small>
                    <input className="p-2 border-b-2" type="password" placeholder="password" value={password} required onChange={(e)=> loginDispatch({type:"SET_PASSWORD",payload:e.target.value})}/>
                </div>
                <div className="flex">
                <label>
                <input type="checkbox"/>
                Remember me
                </label>
                <div className="ml-auto">
                    Forgot Password ?
                </div>
                </div>
                
                <div className="py-4">
                    <button className="rounded-md px-4 py-2 bg-indigo-500 text-slate-50 mr-2">Login</button>
                    <button className="rounded-md px-4 py-2 bg-indigo-500 text-slate-50" onClick={testHandler}>Guest Login</button>
                </div>
                <span className="pb-2">Don't have account yet ? </span>
                <Link to="/signup"><span className="text-bold">Sign Up</span></Link>
            </div>
        </form>
    </div> 
    )
}