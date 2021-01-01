import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ListingsScreen from "../Screens/ListingsScreen"
import ListingDetailsScreen from "../Screens/ListingDetailsScreen"


const Stack = createStackNavigator();

export default function FeedNavigation() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen  name="ListingDetails" component={ListingDetailsScreen} />
      </Stack.Navigator>
    )
}
