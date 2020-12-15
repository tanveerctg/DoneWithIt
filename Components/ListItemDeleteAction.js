import React from 'react'
import { View, StyleSheet,TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function ListItemDeleteAction({onPress}) {
    return(
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.deleteIconContainer}>
            <MaterialIcons name="delete" size={28} color="white" />
        </View>
      </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    deleteIconContainer:{
        backgroundColor:"#e10006",
        width:65,
        alignItems:"center",
        justifyContent:"center"
      }
})
