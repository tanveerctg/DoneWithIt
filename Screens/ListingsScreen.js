import React from "react";
import Card from '../Components/Card'
import Screen from '../Components/Screen'
import {StyleSheet,FlatList, View } from "react-native"


const Data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Red Jacket For Sale',
    subTitle:"$100",
    image:require('../assets/couch.jpg')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Couch in great condition',
    subTitle:"$1000",
    image:require('../assets/jacket.jpg')
  }
];

const ListingsScreen=()=> {
  const [products,setProducts]=React.useState(Data)
  return(
  <Screen style={{backgroundColor:"#f1efeb"}}>
    <View style={{paddingTop:30}}>
      <FlatList
                data={products}
                renderItem={({ item }) => 
                  <Card title={item.title} subTitle={item.subTitle} image={item.image}/>  
                }
                keyExtractor={item => item.id}
              
          />
    </View>
  </Screen>
  )
}


export default ListingsScreen;