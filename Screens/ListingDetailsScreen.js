import React from 'react'
import ListItem from '../Components/ListItem'
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'

export default function ListingDetailsScreen({route}) {
    const item=route.params;
    return (
        <ScrollView>
            <View style={styles.card}>
              <Image source={{uri:item.images[0].url}} style={styles.image}/>
              <View style={styles.details}>
                <Text style={styles.productName}>{item.title}</Text>
                <Text style={styles.price}>{item.subTitle}</Text> 
              </View>
            </View>
            <ListItem image={require('../assets/mosh.jpg')} title="Mosh Hamedani" subTitle="5 Listings"/>
         </ScrollView>
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
  
