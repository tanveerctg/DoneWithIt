import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import {useNetInfo} from "@react-native-community/netinfo";

export default function OfflineStatus() {

    const netInfo = useNetInfo();

    if(netInfo.type !=="unknown" && netInfo.isInternetReachable ==false){
        return (
           <View style={styles.container}>
               <Text style={styles.text}>Internet Not Available</Text>
           </View>
        )
    }
    return null
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ff3d3d",
        marginTop:Constants.statusBarHeight,
        padding:5,
        alignItems:"center"
    },
    text:{
        color:"#ffffff"
    }
})