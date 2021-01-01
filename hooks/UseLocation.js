import React,{useEffect} from 'react'
import * as Location from 'expo-location';

export default () =>{
   const getPermission=async ()=>{
       let { status } = await Location.requestPermissionsAsync();
       if (status !== 'granted') {
         console.log('Permission to access location was denied');
         return;
       }
   }
   const getLocation=async ()=>{
       let {coords:{latitude,longitude}} = await Location.getLastKnownPositionAsync()
       return
       
      
   }
   useEffect(() => {
       getPermission()
       getLocation()
    }, []);

}