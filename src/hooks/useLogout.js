import React, { useState } from 'react'
import { AuthContext } from '../Components/Context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectAuth } from '../firebase/firebase';



export const useLogout = () => {
    const navigate = useNavigate()
    const {user,dispatch} = useContext(AuthContext);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


        const logoutUser =async ()=>{

                try{
                 await projectAuth.signOut()

                    dispatch({type:"LOGOUT"});
                   // navigate('/login')
                }
                catch(error){

                }

        }


        return {logoutUser}
 
}

