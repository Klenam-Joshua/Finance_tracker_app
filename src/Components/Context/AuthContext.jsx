import { createContext,useEffect,useReducer } from "react";
import { projectAuth } from "../../firebase/firebase";



export const AuthContext = createContext();



const AuthContextProvider = ({children}) => {
      
   const AuthReducer = (state, action)=>{
             switch(action.type){
                case "LOGIN":
                    return {...state,user:action.payload}
                    //handle login
                case "LOGOUT":
                    return {...state,user:action.payload}
                    //logout code
                case "SIGNUP":
                    console.log("signup")
                    return {...state,user:action.payload}
                    //singup code
                case "AUTH_IS_READY":
                    return {...state, user:action.payload, authIsReady:true}
                default:
                    return state;
             }
   }


    const [state, dispatch] = useReducer(AuthReducer,{
        user:null,
        authIsReady:false
    })

   useEffect(()=>{
         const unsb = projectAuth.onAuthStateChanged((user)=>{
                   dispatch({type:"AUTH_IS_READY", payload:user})
         })
   },[])
console.log(state)

    //the contest is going to pass user's data accross
       return(
        <AuthContext.Provider  value={{...state,dispatch}}>
              {children}
         </AuthContext.Provider>
       )


}

export default AuthContextProvider
