import jwt_decode from "jwt-decode";
import {useContext} from 'react'
import auth from "../api/auth";

import AuthContext from './authContext';
import authStore from './authStore';

export default useAuth=()=>{
    const {user,setUser} = useContext(AuthContext);

    const logIn=async (response)=>{
        await authStore.storeUser(response.data)
        setUser(jwt_decode(response.data))
    }
    const logOut=async ()=>{
        setUser(null)
        await authStore.removeUser()
    }
    const register=async (response)=>{
        const loginResponse=await auth.login(response.data.email,response.data.password)
        logIn(loginResponse)
    }
    return {user,setUser,logIn,logOut,register}
}