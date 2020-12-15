import React from 'react'
import { StyleSheet, SafeAreaView} from 'react-native'
import Constants from 'expo-constants';

export default function Screen({children,style}) {
    return (
        <SafeAreaView style={[styles.container,style]}>
           {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:Constants.statusBarHeight,
        flex:1
    }
})
