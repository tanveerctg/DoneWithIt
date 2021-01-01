import React,{useState,useContext,useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNetInfo} from "@react-native-community/netinfo";
import jwt_decode from "jwt-decode";
import AppLoading from 'expo-app-loading';

import listingsApi from './api/listingsApi'
import ListingEditingScreen from './Screens/ListingEditingScreen'
import Screen from './Components/Screen'
import WelcomeScreen from './Screens/WelcomeScreen'
import LoginScreen from "./Screens/LoginScreen"
import RegisterScreen from "./Screens/RegisterScreen"
import MyAccountScreen from "./Screens/MyAccountScreen"
import ListingsScreen from "./Screens/ListingsScreen"
import ListingDetailsScreen from "./Screens/ListingDetailsScreen"
import OfflineStatus from "./Components/OfflineStatus"
import AuthContext from "./auth/authContext"
import AuthNavigation from "./navigations/AuthNavigation"
import ThemeStyle from "./navigations/ThemeStyle"
import AppNavigation from "./navigations/AppNavigaton"
import authStore from './auth/authStore';


const Tab = createBottomTabNavigator();


function Feed() {
 
  return (
    <Screen>
      <Text>Feed</Text>
    </Screen>
  );
}

function Account() {
 
  return (
    <Screen>
      <Text>Account</Text>
    </Screen>
  );
}
function Root() {
 
  return (
    <Screen>
      <Text>Root</Text>
    </Screen>
  );
}
const TabNavigator=()=>(
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor:"#ab1f53",
      activeTintColor:"white",
      labelStyle: {
        fontSize: 12
      },
    }}
  >
    <Tab.Screen name="Feed" component={StackNavigator} options={{tabBarIcon:({size,color})=><MaterialCommunityIcons name="home" size={size} color={color} /> }}/>
    <Tab.Screen name="Root" component={Root} options={{tabBarIcon:({size,color})=><MaterialCommunityIcons name="plus" size={size} color={color} /> }}/>
    <Tab.Screen name="Messages" component={Account} options={{tabBarIcon:({size,color})=><MaterialCommunityIcons name="account" size={size} color={color} /> }}/>
  </Tab.Navigator>
)

function Home() {
  return (
      <TabNavigator/>
  );
}

function HomeScreen({route,navigation}) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      {route.params.id && <Text>{route.params.id}</Text>}
      <Button title="Go To About Page" onPress={()=>navigation.navigate('About')}/>
      <Home/> 
    </View>
  );
}
function AboutScreen({navigation}) {
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
      <Button title="Go To Home Page" onPress={()=>navigation.navigate('Home',{id:1})}/>
    </View>
  );
}

const Stack = createStackNavigator();


const StackNavigator=()=>(
      <Stack.Navigator screenOptions={{headerTintColor:"red"}}>
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen  name="Home" component={HomeScreen} options={{title:"My Home",headerStyle : {backgroundColor:"red"},headerTintColor:"#fff"}} />
      </Stack.Navigator>
)


function App() {
  const netInfo = useNetInfo();
  const [user,setUser]=useState(null);
  const [isReady, setIsReady] = useState(false)

  const getUserFromStore=async ()=>{
    try {
      const getToken=await authStore.getUser()
      console.log("getToken",jwt_decode(getToken, { header: true }))
      if(getToken)return setUser(jwt_decode(getToken, { header: true }))
      
    } catch (error) {
      console.log(error)
    }
  }
  
  if(!isReady){
    return <AppLoading
      startAsync={getUserFromStore}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />

  }

  return ( 
    <AuthContext.Provider value={{user,setUser}}>
      <OfflineStatus/>
      <NavigationContainer theme={ThemeStyle} >
        {
          user ?
          <AppNavigation/>
          :
          <AuthNavigation/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;

