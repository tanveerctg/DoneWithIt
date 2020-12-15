import React from "react";
import { TextInput,StyleSheet,View  } from "react-native";
import defaultStyle from "../config/styles"
import { MaterialIcons } from '@expo/vector-icons';


const AppTextInput=({icon,placeholder, ...other})=> {

  return (

      <View style={styles.container}>
        {icon && <MaterialIcons name={icon} size={20} style={styles.icon} color={defaultStyle.colors.lightDark}/>}
        <TextInput 
          placeholder={placeholder} 
          style={[styles.input,defaultStyle.text]}  
          placeholderTextColor={defaultStyle.colors.lightDark} 
          {...other}
        /> 
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#e9eaec",
    paddingVertical:12,
    paddingHorizontal:10,
    borderRadius:50,
    marginVertical:5
  },
  icon:{
    marginRight:10
  },
  input:{
    width:"100%"
  }
})

export default AppTextInput;