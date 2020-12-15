import React from "react";
import { TextInput,StyleSheet,View, Text,Modal,Button,FlatList,TouchableWithoutFeedback,TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFormikContext } from 'formik'

import defaultStyle from "../config/styles"
import AppText from "./AppText";
import AppErrorMessage from './AppErrorMessage'



const AppPicker=({name,icon,placeholder,modalVisible})=> {

  const [modalOpen,setModalOpen]=React.useState(false)
  const [selectedCategory,setCategory]=React.useState()
 
  const Lists=[
      {name:"tanveer"},
      {name:"tanim"},
      {name:"wajih"}
    ]
  const {handleChange, values, touched, errors}= useFormikContext()
  
  const modalOpenHandler=()=>{
    setModalOpen(true)
  }
  const modalCloseHandler=()=>{
    setModalOpen(false)
  }
  const setCategoryHandler=(category)=>{
    setCategory(category)
  }

  return (
    <View style={{marginBottom:20}}>
      <TouchableWithoutFeedback onPress={modalOpenHandler} style={styles.container}>
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} style={styles.icon} color={defaultStyle.colors.lightDark}/>}
            <AppText style={styles.text}>{selectedCategory ? selectedCategory.name : placeholder}</AppText>
            <MaterialCommunityIcons name="chevron-down" size={20} style={styles.icon} color={defaultStyle.colors.lightDark}/>
        </View>
      </TouchableWithoutFeedback>
      <AppErrorMessage error={errors[name]} visible={touched[name]}/>
      <Modal
          animationType="slide"
          visible={modalOpen}
      >
        <Button
            title="Press me"
            onPress={modalCloseHandler}
        />
        {
          Lists.map(i=>
            <TouchableOpacity key={i.name} onPress={()=>{
                handleChange(name)
                values.category=i.name
                setCategoryHandler(i)
                modalCloseHandler()
              }
              }
            >
              <AppText>{i.name}</AppText>
            </TouchableOpacity>

            )
        }
            {/* <FlatList     
              data={Lists}
              renderItem={({ item }) => 
                  <TouchableOpacity onPress={()=>setCategoryHandler(item)}>
                    <AppText>{item.name}</AppText>
                  </TouchableOpacity>
              }
              keyExtractor={item => item.name}
             
          /> */}
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#e9eaec",
    paddingVertical:12,
    paddingHorizontal:10,
    borderRadius:50
  },
  icon:{
    marginRight:10
  },
  input:{
    width:"100%"
  },
  text:{
      flex:1,
      color:defaultStyle.colors.lightDark
  }
})

export default AppPicker;