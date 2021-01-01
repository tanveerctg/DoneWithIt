import React from 'react'
import { StyleSheet, View,TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ListEditIcon({onPress}) {
    return (
        <TouchableOpacity 
          onPress={onPress}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="plus" size={24} color="white" />
          </View>
        </TouchableOpacity>
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
