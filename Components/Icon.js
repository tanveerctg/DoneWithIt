import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Icon({icon,size=22,color="white",style}) {
    return (
        <View style={[styles.icon,style]}>
            <MaterialIcons size={size} name={icon} color={color}/>
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
      width:35,
      height:35,
      borderRadius:20,
      justifyContent:"center",
      alignItems:"center"
    }
})
