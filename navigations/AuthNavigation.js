import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../Screens/WelcomeScreen'
import LoginScreen from "../Screens/LoginScreen"
import RegisterScreen from "../Screens/RegisterScreen"

const Stack = createStackNavigator();

const AuthNavigation = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen  name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}} />
        <Stack.Screen  name="Login" component={LoginScreen} />
        <Stack.Screen  name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    )
}

export default AuthNavigation
