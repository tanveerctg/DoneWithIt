import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import * as yup from 'yup'; 

import Screen from "../Components/Screen"
import AppForm from '../Components/AppForm'
import AppFormField from '../Components/AppFormField'
import SubmitBtn from '../Components/AppFormSubmitBtn'

export default function LoginScreen() {
    let loginSchema = yup.object().shape({
        email: yup.string().required("Email is a required field.").email("Email must be valid."),
        password:yup.string().required("Password is a required field.").min(6,"Password must be at least 6 characters.")
    });
    return (
        <Screen>
            <View style={styles.container}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <AppForm initialValues={{email: '',password:''}} schema={loginSchema}>
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
