import React,{useState} from "react";
import Screen from './Screen';
import * as ImagePicker from 'expo-image-picker';
import { View,Alert,StyleSheet} from 'react-native';
import { useFormikContext } from 'formik'


import ImageInput from "./ImageInput"
import ImageContainer from "./ImageContainer"
import AppErrorMessage from './AppErrorMessage'

const AppImagePicker=({name})=> {


  const {handleChange, values, touched, errors,setFieldValue}= useFormikContext()

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      let id;

      if(values[name].length==0){
        id=1;
      }else{
        id=values[name].length+1
      }
      setFieldValue(name, values[name].concat({id,uri:result.uri}))
      
    }
  };

  const openAlert=(id)=>{
    Alert.alert(
      "Delete",
      "Are u wanna delete this pic?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Yes", onPress: () =>{

          setFieldValue(name, values[name].filter(img=>img.id !== id))
        }}
      ],
      { cancelable: false }
    );
  }

  return ( 
          <View style={{marginBottom:10}}>
            <View style={styles.container}>
              <ImageInput onPress={pickImage}/>
              <ImageContainer imageLists={values[name]} onPress={(id)=>openAlert(id)}/>
            </View>
            <AppErrorMessage error={errors[name]} visible={touched[name]} />
          </View>
         )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    flexWrap:"wrap"
  }
})

export default AppImagePicker;

