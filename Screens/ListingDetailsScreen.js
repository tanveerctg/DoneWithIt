import React from 'react'
import ListItem from '../Components/ListItem'
import { StyleSheet, Text, View,Image } from 'react-native'

export default function ListingDetailsScreen({productName,price}) {
    return (
        <View>
            <View style={styles.card}>
              <Image source={require('../assets/jacket.jpg')} style={styles.image}/>
              <View style={styles.details}>
                <Text style={styles.productName}>{productName}</Text>
                <Text style={styles.price}>{price}</Text> 
              </View>
            </View>
            <ListItem image={require('../assets/mosh.jpg')} name="Mosh Hamedani" listing="5 Listings"/>
         </View>
    )
}

const styles = StyleSheet.create({

    card:{
      width:"100%",
      backgroundColor:"#ffffff"
    },
    image:{
      width:"100%",
      height:220
    },
    details:{
      padding:20
    },
    productName:{
      fontSize:20,
      fontWeight:"700"
    },
    price:{
      fontSize:17,
      color:"#11d4d0",
      fontWeight:"600",
      marginTop:5
    }
  })
  
