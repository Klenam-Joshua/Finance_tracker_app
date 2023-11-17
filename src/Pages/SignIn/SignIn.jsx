import "./SignIn.css"
import FormsWrapper from "../../Components/FormsWrapper/FormsWrapper"
import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"
import LoadingAnim from "../../Components/LoadingAnim/LoadingAnim"
const SignIn = () => {

const [userEmail, setUserEmail] = useState("");
const [userPassword, setUserPassword] = useState("");

//invokes useLogin hook
const {isLoading, error,loginUser }  = useLogin();


const LoginData = {
    userEmail:userEmail.trim(),
    userPassword:userPassword.trim()
}


const handleError = (data)=>{

         let errorExist = false;
        for (const loginItem  in LoginData) {
              // console.log(LoginData[loginItem])
              if(LoginData[loginItem] === ""){
                  errorExist = true;
              }
              else{
                errorExist = false;
              }
        }

        return errorExist;
}



const handleSubmit = (e)=>{
    e.preventDefault()
    if(!handleError(LoginData)){
           loginUser(LoginData)
    }

}


  return (
         <FormsWrapper>
          {
            isLoading &&
           <LoadingAnim/>
          }
          {
            error &&
            <p style={{color:"red", textAlign:"center"} }>{error}</p>
          }
            <div  className="login__container">
          <form  id="login_form"  onSubmit={handleSubmit}>
          <div className="input_field_wrapper">
                      <input
                        onChange={(e)=>{setUserEmail(e.target.value)}}
                        value={userEmail}
                        type="email"  id="name_field"  placeholder="email address"  required />
            </div>

          <div className="input_field_wrapper">
                 <input
                 onChange={e=>{setUserPassword(e.target.value)}}
                 value={userPassword}
                  type="password"  id="password_field" placeholder="password"  required/>
            </div>
          
            <button type="submit">
                     Login
            </button>
          </form>
           
           <p>
              Don't have an account ? <a href="/signup">Signup</a>
           </p>
    </div>
         </FormsWrapper>
  )
}


export default SignIn 
