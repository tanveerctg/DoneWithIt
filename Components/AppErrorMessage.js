import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'

export default function AppErrorMessage({error,visible}) {
    if(!error || !visible){
        return null
    }
    return <AppText style={styles.container}>{error}</AppText>
}

const styles = StyleSheet.create({
    container:{
        fontSize:16,
        color:'#ff534b'
    }
})
