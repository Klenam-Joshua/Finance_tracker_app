import { useState } from "react"
import FormsWrapper from "../../Components/FormsWrapper/FormsWrapper"
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("")


    
    const SignupData = {
        displayName:userName,
        password:userEmail,
        password:userPassword
      }

    //custom hooks

    const {isLoading, createUser} = useSignup(SignupData)
    




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
        isLoading && 
        <p>
                creating user
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
