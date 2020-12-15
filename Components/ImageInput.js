import React from 'react'
import { View, Text,TouchableWithoutFeedback,StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function ImageInput({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="camera" size={30} color="black" />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:{
        height:92,
        width:92,
        backgroundColor:'#e6e6e6',
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        marginRight:10
    }
})