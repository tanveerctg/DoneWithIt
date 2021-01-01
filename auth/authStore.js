import * as SecureStore from 'expo-secure-store'; 

const key='authToken'

const storeUser=async (value)=>{
    try{
        await SecureStore.setItemAsync(key, value)
    }catch(error){
        console.log(error)
    }
}

const getUser=async ()=>{
    try{
        return await SecureStore.getItemAsync(key)
    }catch(error){
        console.log(error)
    }
}

const removeUser=async ()=>{
    try{
        await SecureStore.deleteItemAsync(key)
    }catch(error){
        console.log(error)
    }
}

export default {
    storeUser,getUser,removeUser
}