import { projectAuth } from "../firebase/firebase"
import { AuthContext } from "../Components/Context/AuthContext"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const useLogin = () => {
    const {user, dispatch} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    //unscribing hook

    const [isCancelled , setIsCancelled] = useState(false);
    
const navigate = useNavigate()

      
    const loginUser = async (data)=>{
                setError(false);
                setIsLoading(true);
                   try {
                       const resp = await projectAuth.signInWithEmailAndPassword(data.userEmail, data.userPassword);
                       if(!resp){
                            if(!isCancelled){
                                setIsLoading(false);
                            }
                       }
                      


                       dispatch({type:"LOGIN",payload:{...resp.user}});
                   console.log(isCancelled)
                      if(!isCancelled){                
                        setIsLoading(false)
                      }

                      
                  
                   } 
                   catch (error) {
                        
                            let errorMessage = JSON.parse(error.message).error.message.split("_").join(" ").toLowerCase();
                         
                            setIsLoading(false)
                            setError(errorMessage)
                           
                          // console.log())
                   }
    }

    
useEffect(()=>{
    return ()=>{
        setIsCancelled(true)
    }
},[])
    return {isLoading,error, loginUser}
    //state
    //pass data to the child function

    
} 

