import { useState } from "react"
import FormsWrapper from "../../Components/FormsWrapper/FormsWrapper"
import { useSignup } from "../../hooks/useSignup";
import LoadingAnim from "../../Components/LoadingAnim/LoadingAnim";
import { useContext } from "react";
import { AuthContext } from "../../Components/Context/AuthContext";
// react toastify

import { ToastContainer,toast } from "react-toastify";

//



const Signup = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("")


    
    const SignupData = {
        displayName:userName,
        email:userEmail,
        password:userPassword
      }

    //custom hooks

    const {isLoading, createUser, error,success} = useSignup(SignupData)
    



    const handleError = (data)=>{

        let errorExist = false;
       for (const loginItem  in SignupData) {
             // console.log(LoginData[loginItem])
             if(SignupData[loginItem] === ""){
                 errorExist = true;
             }
             else{
               errorExist = false;
             }
       }

       return errorExist;
}

const handleSignUp = (e)=>{
    e.preventDefault();
         if(!handleError(SignupData)){
             createUser()
         }
}

  return (

    <FormsWrapper>
      {
        success && 
           <p style={{color:"green", textAlign:"center"}}>
            user created successfully
           </p>
      }
        
    {
        isLoading && 
         <LoadingAnim />

    }
    {
      error && 
      <p  style={{color:"red", textAlign:"center", fontSize:"0.8rem"}}>
        {error}
      </p>
    }

            <div  className="login__container">
          <form  id="login_form"  onSubmit={handleSignUp}>
          <div className="input_field_wrapper">
                      <input 
                      onChange={e=>setUserName(e.target.value)}
                      value={userName}
                      type="text"  id="signup_name_field"  placeholder="name"  required />
            </div>
          <div className="input_field_wrapper">
                      <input
                      onChange={e=>setUserEmail(e.target.value)}
                      value={userEmail}
                       type="email"  id="signup_email_field"  placeholder="email address"  required />
            </div>

          <div className="input_field_wrapper">
                 <input
                 onChange={e=>setUserPassword(e.target.value)}
                 value={userPassword}
                  type="password"  id="signup_password_field" placeholder="password"  required/>
            </div>
          
            <button type="submit">
                     Signup
            </button>
          </form>
           
           <p>
              Don't have an account ? <a href="/login">Login</a>
           </p>
    </div>
         </FormsWrapper>
  )
}

export default Signup
