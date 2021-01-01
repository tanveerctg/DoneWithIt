
import clientApi from "./clientApi"

const login=async (email,password)=>{
    return await clientApi.post('/auth',{email,password})
}
const register=async (userInfo)=>{
    return await clientApi.post('/users',userInfo)
}
export default {login,register}