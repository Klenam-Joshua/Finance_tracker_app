import { useState } from "react";
import { projectAuth } from "../firebase/firebase";

//context
import { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthContext";






export const useSignup = (data) => {
      const [error, setError] = useState(false);
      const [isLoading, setIsLoading] = useState(false)
      const [success, setSuccess] = useState(false);
      //context
      const {dispatch}= useContext(AuthContext);

          const createUser =async ()=>{
            setError("")
                  setIsLoading(true)
                try{
                    const resp = await projectAuth.createUserWithEmailAndPassword(data.email,data.password);
                    
                 
                    if(!resp){
                         throw new Error("failed to create user !")
                    }

                    await resp.user.updateProfile({displayName:data.displayName});
                    setSuccess(true)
                   dispatch({type:"SIGNUP", payload:resp.user});
                    setIsLoading(false)

                } 
                catch(err){
                          setIsLoading(false)
                           setError(err.message)
                           setSuccess(false)
                }

                setTimeout(()=>{
                  setSuccess(false)
                }, 3000)
          }

  return {isLoading, createUser, error, success}
}


