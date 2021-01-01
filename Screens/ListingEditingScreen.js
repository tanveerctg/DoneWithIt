import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView } from 'react-native'
import * as yup from 'yup'; 

import Screen from "../Components/Screen"
import AppForm from '../Components/AppForm'
import AppFormField from '../Components/AppFormField'
import SubmitBtn from '../Components/AppFormSubmitBtn'
import AppPicker from "../Components/AppPicker";
import AppImagePicker from "../Components/AppImagePicker";
import useLocation from "../hooks/UseLocation";
import * as Location from 'expo-location';
import listingsApi from "../api/listingsApi"
import Loading from "../Components/Loading"

export default function ListEdiditingSchema() {

    const  coords=useLocation()
    const [loading,setLoading]=useState(false)

    const handleSubmit=async (listing)=>{
        setLoading(true)
        const response=await listingsApi.addListing(listing)
        setLoading(false)
        console.log(response.data,listing)
        alert(JSON.stringify(response.data))
        if(!response.ok) alert(response.problem)
        
    }

    let listEdiditingSchema = yup.object().shape({
        category:yup.string().required().label('Category'),
        title:yup.string().required().label('Title'),
        details:yup.string(),
        price:yup.number().required().positive().integer().label('Price'),
        images:yup.array().required().min(1).label('This')
      });

    return (
        <Screen>
            
            <Loading visible={loading}/>
            <ScrollView >
                <View style={styles.container}>
                <AppForm initialValues={{title: '',price:'',details:'',category:'',images:[]}} schema={listEdiditingSchema} onSubmit={handleSubmit}>
                    <AppImagePicker name="images"/>
                    <AppFormField
                        name="title"
                        placeholder="Title"
                        autoCapitalize="none"
                        autoCompleteType="off" 
                    />
                    <AppFormField
                        name="price"
                        placeholder="Price"
                        autoCapitalize="none"
                        autoCompleteType="off" 
                    />
                    <AppFormField
                        name="details"
                        placeholder="Details"
                        autoCapitalize="none"
                        autoCompleteType="off" 
                        multiline
                        numberOfLines={2}
                    />      
                    <AppPicker 
                        name="category"
                        icon="apps" 
                        placeholder="Categories" 
                    />
                    <SubmitBtn/>
                </AppForm>
            
                </View>
            </ScrollView>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:15
    }
})
