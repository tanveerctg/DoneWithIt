import React from 'react'
import { StyleSheet, Text, View,Image,TouchableHighlight} from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({image,icon,title,subTitle,style,renderRightActions,onPress}) {
    return (
      <Swipeable renderRightActions={renderRightActions}>
          <TouchableHighlight
            underlayColor="#DDDDDD"
            onPress={onPress}>

            <View style={[styles.listContainer,style]}>
              {icon && icon}
              {image && <Image source={image} style={styles.clientPic}/>}
              <View style={styles.listDetails}> 
                <Text style={styles.title}>{title}</Text>
               {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
              </View>
            </View>

          </TouchableHighlight>
      </Swipeable>

    )
}

const styles = StyleSheet.create({
    listContainer:{
        paddingTop:10,
        paddingBottom:10,
        paddingHorizontal:15,
        flexDirection:"row",
        alignItems:"center"
      },
      listDetails:{
        marginLeft:10
      },
      clientPic:{
        width:55,
        height:55,
        borderRadius:30
      },
      title:{
        fontSize:16,
        fontWeight:"600"
      },
      subTitle:{
        fontSize:15,
        color:"#7b7594"
      }
})
