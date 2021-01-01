import React,{useContext} from "react";
import {StyleSheet,FlatList, View } from "react-native";
import {useState} from "react"


import Icon from '../Components/Icon';
import Screen from '../Components/Screen'
import ListItem from '../Components/ListItem'
import MessageScreen from '../Screens/MessagesScreen'
import AuthContext from "../auth/authContext";
import authStore from "../auth/authStore"
import useAuth from "../auth/useAuth"

const Data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'My Listings',
    icon:"format-list-bulleted",
    bg:"#ff525c"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'My Messages',
    icon:"email",
    bg:"#18b287",
    target:"Messages"
  }
];

const App=({navigation})=> {
  const [info,setInfo]=useState(Data)
  const {user,logOut} = useAuth();

  return(
    <Screen style={{backgroundColor:"#f1efeb"}}>
      <View>
        <ListItem 
          title={user.name} 
          subTitle={user.email} 
          image={require('../assets/mosh.jpg')}
          style={{backgroundColor:"#ffffff"}}
        />
      
        <FlatList
              style={{marginTop:30,marginBottom:15}}
              data={info}
              renderItem={({ item }) => 
                <ListItem 
                title={item.title}
                icon={<Icon icon={item.icon} style={{backgroundColor:item.bg}} />}
                style={{backgroundColor:"#ffffff"}}
                onPress={()=>navigation.navigate(item.target)}
                />  
              }
              keyExtractor={item => item.id}
             
        />

        <ListItem 
          title="Log Out" 
          icon={<Icon icon="email" color="black" style={{backgroundColor:"#f6ff00"}} />}
          style={{backgroundColor:"#ffffff"}}
          onPress={()=>{
           logOut()
          }}    
        />
      </View>
    </Screen>

  )
}

const styles = StyleSheet.create({

})

export default App;