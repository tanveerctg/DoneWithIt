import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Button({style,text,...otherProps}) {
    return (
      <TouchableOpacity style={[styles.container,style]} {...otherProps}>        
          <Text style={styles.BtnText}>{text}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
      width:'100%',
      height:45,
      backgroundColor:'red',
      borderRadius:25,
      justifyContent:'center',
      alignItems:'center'
    },
    BtnText:{
      color:'white',
      fontWeight:'500',
      fontSize:18,
      textTransform:"uppercase"
    }
  })
