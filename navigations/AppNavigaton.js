import React from 'react'
import {Text,View,StyleSheet, TouchableOpacity} from "react-native"
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import FeedNavigation from "./FeedNavigation";
import AccountNavigation from "./AccountNavigation"
import ListingEditScreen from "../Screens/ListingEditingScreen"
import ListEditIcon from "./ListEditIcon"

const Tab = createBottomTabNavigator();

export default function AppNavigaton() {
    return (
      <Tab.Navigator tabBarOptions={{ labelStyle: {fontSize: 12,fontWeight:"500"},}}>
        <Tab.Screen name="Feed" component={FeedNavigation} options={{tabBarIcon:({size,color})=><MaterialCommunityIcons name="home" size={size} color={color} /> }}/>
        <Tab.Screen name="Edit Listing" component={ListingEditScreen} options={({navigation})=>({tabBarButton:()=>
          <ListEditIcon 
            onPress={()=>navigation.navigate("Edit Listing")}>
          </ListEditIcon>
        })}/>
        <Tab.Screen name="Account" component={AccountNavigation}  options={{tabBarIcon:({size,color})=><MaterialCommunityIcons name="account" size={size} color={color} /> }}/>
      </Tab.Navigator>
    )
}
 
const styles = StyleSheet.create({
  icon:{
    width:60,
    height:60,
    borderRadius:30,
    borderWidth:5,
    bottom:13,
    borderColor:"white",
    backgroundColor:"#bd326d",
    alignItems:"center",
    justifyContent:"center"
  }
})