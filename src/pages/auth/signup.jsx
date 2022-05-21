import axios from "axios";
import {useReducer} from "react";
import {Link, useNavigate} from "react-router-dom";
import { signupReducer } from "../../reducer/authReducer";
import { useAuth } from "../../context/authContext";

export const Signup = () => {
    const navigate = useNavigate();
    const {authDispatch}= useAuth();
    const [{username,email,password,ConfirmPassword},signupDispatch] = useReducer(signupReducer, {email:"", password:"",ConfirmPassword:"",username:"",});
    const submitHandler= async (e, username, email, password, ConfirmPassword)=>{
    e.preventDefault();
    try{
    const signUpResponse = await axios.post("api/auth/signup", {username,email,password,ConfirmPassword});
    localStorage.setItem("encodedToken", signUpResponse.data.encodedToken)
    localStorage.setItem('userData', JSON.stringify(signUpResponse.data.createdUser));
    authDispatch({ type: "ADD_TOKEN", payload: signUpResponse.data.encodedToken })
    navigate("/login")
    }
    catch(err){
    console.log(err);
    }
}
return(
    <div className="flex justify-center py-8" >
    <form className="p-5 h-screen w-6/12 xs:w-fit" onSubmit={(e)=> submitHandler(e, username, email, password)}>
        <p className="text-5xl">Let's test your Knowledge, fam!!</p>
        <div className="my-5">
            <div className="py-5 flex flex-col">
                <small className="py-2">Username</small>
                <input className="p-2 border-b-2" type="text" placeholder="hypebeast" value={username} required 
                onChange={(e)=> signupDispatch({type:"SET_USERNAME",payload:e.target.value})}/>
            </div>
            <div className="pb-5 flex flex-col">
                <small className="py-2">E-mail</small>
                <input className="p-2 border-b-2" type="email" placeholder="heat@got-you.com" value={email} required  onChange={(e)=> signupDispatch({type:"SET_EMAIL",payload:e.target.value})}/>
            </div>
            <div className="pb-5 flex flex-col">
                <small className="pb-2">Password</small>
                <input className="p-2 border-b-2" type="password" placeholder="password" value={password} required 
                onChange={(e)=> signupDispatch({type:"SET_PASSWORD",payload:e.target.value})}/>
            </div>
            <div className="pb-5 flex flex-col">
                <small className="pb-2">Confirm Password</small>
                <input className="p-2 border-b-2" type="password" placeholder="Confirm password" value={ConfirmPassword} required 
                onChange={(e)=> signupDispatch({type:"SET_CONFIRM_PASSWORD",payload:e.target.value})}/>
            </div>
            <div>{ConfirmPassword === password ? "" : <div class="alert alert-danger"><i class="fas fa-exclamation-triangle mr-2"></i>Password doesn't match</div>}
            </div>
            <div className="py-5">
                <button className="rounded-md px-4 py-2 bg-indigo-500 text-slate-50 mr-2">Register</button>
            </div>
            <Link to="/login"><p className="py-2">Already a member ? <span className="font-bold">Login</span></p></Link>
        </div>
    </form>
    </div>
    )
}