import React from "react";
import ListItem from '../Components/ListItem'
import Screen from '../Components/Screen'
import { StyleSheet, FlatList} from "react-native";
import ListItemDeleteAction from "../Components/ListItemDeleteAction";



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Tanveer',
    listings:'5 Listings',
    image:require('../assets/logo-red.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Opu',
    listings:'15 Listings',
    image:require('../assets/mosh.jpg')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Wajih',
    listings:'10 Listings',
    image:require('../assets/mosh.jpg')
  },
];


const App=()=> {
  const [data, setData] = React.useState(DATA);
  const [isFetching,setIsFetching]=React.useState(false)

  return(
    <Screen>
        <FlatList
          data={data}
          renderItem={({ item }) => 
          <ListItem 
           image={item.image} 
           title={item.name} 
           subTitle={item.listings} 
           onPress={()=>alert('items selected')}
           renderRightActions={()=><ListItemDeleteAction onPress={()=>{
             const filteredItems=data.filter(itm=>itm.id!==item.id)
             setData(filteredItems)
           }}/>}
           /> }
          keyExtractor={item => item.id}
          onRefresh={()=>{
            setIsFetching(true)
            setData([{
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              name: 'Tanveer',
              listings:'5 Listings',
              image:require('../assets/logo-red.png')
            }
            ])
            setIsFetching(false)
         }}
         refreshing={isFetching}
        />
    </Screen>
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

export default App;