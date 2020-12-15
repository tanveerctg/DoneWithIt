import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function Card({title,subTitle,image}) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
              <Image resizeMode="cover" source={image} style={styles.image}/>
              <View style={styles.details}>
                <Text style={styles.productName}>{title}</Text>
                <Text style={styles.price}>{subTitle}</Text> 
              </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      alignItems:"center",
      marginBottom:20
    },
    card:{
      width:"90%",
      backgroundColor:"#ffffff",
      borderRadius:15,
      overflow:"hidden"
    },
    image:{
      width:"100%",
      height:200
    },
    details:{
      padding:20
    },
    productName:{
      fontSize:16,
      fontWeight:"700"
    },
    price:{
      fontSize:15,
      color:"#0fb4b2",
      fontWeight:"600",
      marginTop:5
    }
  })
