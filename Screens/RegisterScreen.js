import React,{useState} from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import * as yup from 'yup'; 

import Screen from "../Components/Screen"
import AppErrorMessage from '../Components/AppErrorMessage';
import AppForm from '../Components/AppForm'
import AppFormField from '../Components/AppFormField'
import SubmitBtn from '../Components/AppFormSubmitBtn'
import authApi from "../api/auth"
import useAuth from "../auth/useAuth"
import useApi from "../hooks/useApi"
import Loading from '../Components/Loading';

export default function RegisterScreen() {
    const [registerFailed,setRegisterFailed]=useState(false)
    const [errorMessage,setErrorMessage]=useState(null)
    const {register} = useAuth();
    const registerApi=useApi(authApi.register);

    let loginSchema = yup.object().shape({
        name: yup.string().required("Name can't be empty"),
        email: yup.string().required("Email is a required field").email("Email must be valid."),
        password:yup.string().required("Password is a required field").min(6,"Password must be at least 6 characters.")
    });
    const handleSubmit=async (values)=>{

        const response=await registerApi.request(values)

        if(!response.ok){
          setErrorMessage(response.data.error)
          return setRegisterFailed(true)
        }

        register(response)
    }
    return (
        <Screen>
            <View style={styles.container}>
                <AppErrorMessage error={errorMessage} visible={registerFailed} style={{marginBottom:5}}/>
                <AppForm initialValues={{name:'',email: '',password:''}} schema={loginSchema} onSubmit={handleSubmit}>
                    <AppFormField
                        name="name"
                        type="name"
                        placeholder="Name"
                        icon="account-circle"
                        autoCapitalize="none"
                        autoCompleteType="off" 
                        autoCorrect={false}
                    />  
                    <AppFormField
                        name="email"
                        type="email"
                        placeholder="Email"
                        icon="email"
                        autoCapitalize="none"
                        autoCompleteType="off" 
                        autoCorrect={false}
                        keyboardType= "email-address"
                    />   
                    <AppFormField
                        name="password"
                        placeholder="Password"
                        icon="lock"
                        autoCapitalize="none"
                        autoCompleteType="off" 
                        secureTextEntry
                    />   
                    <SubmitBtn/>
                    <Loading visible={registerApi.loading}/>
                </AppForm>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15
    },
    logo:{
        width:70,
        height:70,
        alignSelf:"center",
        marginVertical:20
    }
})
