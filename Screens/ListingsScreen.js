import React,{useEffect} from "react";


import Card from '../Components/Card'
import Screen from '../Components/Screen'
import {StyleSheet,FlatList, View,Text } from "react-native"
import listingsApi from '../api/listingsApi'
import useApi from "../hooks/useApi"
import Loading from "../Components/Loading"

// const Data = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'Red Jacket For Sale',
//     subTitle:"$100",
//     image:require('../assets/couch.jpg')
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Couch in great condition',
//     subTitle:"$1000",
//     image:require('../assets/jacket.jpg')
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63s',
//     title: 'Couch in great condition',
//     subTitle:"$1000",
//     image:require('../assets/jacket.jpg')
//   }
// ];

const ListingsScreen=({navigation})=> {
  const {data:products,loading,error,request:loadProducts}=useApi(listingsApi.getListings)
  
  
  useEffect(() => {
    loadProducts()
  }, [])



  return(
  <View style={{paddingTop:30,backgroundColor:"#f1efeb",flex:1}}>

      <Loading visible={loading}/>
      <FlatList
                data={products}
                renderItem={({ item }) => 
                  <Card title={item.title} subTitle={item.price} image={item.images[0].url} onPress={()=>navigation.navigate("ListingDetails",item)}/>  
                }
                keyExtractor={item => item.id.toString()}
          />

  </View>
  )
}


export default ListingsScreen;