import { useState } from "react";
import { projectAuth } from "../firebase/firebase";



export const useSignup = (data) => {
      const [error, setError] = useState(false);
      const [isLoading, setIsLoading] = useState(false)

          const createUser =async ()=>{
                  setIsLoading(true)
                try{
                    const resp = await projectAuth.createUserWithEmailAndPassword(data.email,data.password);
                 
                    if(!resp){
                         throw new Error("failed to create user !")
                    }

                    await resp.user.updateProfile({displayName});
                    console.log(resp.user)
                    setIsLoading(false)

                } 
                catch(err){
                          setIsLoading(false)
                }
          }

  return {isLoading, createUser}
}


