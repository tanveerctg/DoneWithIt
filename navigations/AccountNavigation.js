import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MyAccountScreen from "../Screens/MyAccountScreen"
import MessagesScreen from "../Screens/MessagesScreen"


const Stack = createStackNavigator();

export default function FeedNavigation() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Account" component={MyAccountScreen} />
        <Stack.Screen  name="Messages" component={MessagesScreen} />
      </Stack.Navigator>
    )
}
